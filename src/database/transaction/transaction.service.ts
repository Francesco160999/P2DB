import { Injectable } from '@nestjs/common';
import { ITransaction } from './transaction.interface';
import axios from 'axios';
import { readdir } from 'fs';
import { Utilty } from '../utility';
import * as nodes from '../../data/nodes.list.json';

@Injectable()
export class TransactionService {


    createTransaction(transaction: ITransaction) {

    }

    async getTransaction(hash :string): Promise<ITransaction | undefined> {
        const path = require("path");
        //found if the hash is in the current node
        let hashPath: string = "../"+Utilty.TRANSACTIONS_PATH();
        let hfiles: string[];
        await readdir(path.resolve(__dirname, hashPath), async (err, files) => { 
            
            hfiles = files;
            if(err) console.log(err); 

            console.log(hashPath, files);

            if(hfiles != null) {
                for(let file of hfiles) {
                    if(hash === file.split('.')[0]){
                        return Promise.resolve(require(`../${Utilty.TRANSACTIONS_PATH()}${file}`));
                    }
                }
            }
        
            //if not in this node search in other nodes
            //const nodesList: any[] = require(Utilty.NODES_LIST());
            for(let node of nodes) {
                axios.get(`${node.host}:${node.host}/transaction/${hash}`).then((data: any) => {
                    if(data == null) return;

                    Utilty.fetchTransaction(data);
                    return Promise.resolve(data);
                });
            }

            return Promise.resolve(undefined);
        });
        return Promise.resolve(undefined);
    }
}
