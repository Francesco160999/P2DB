import { Injectable } from '@nestjs/common';
import { ITransaction } from './transaction.interface';
import axios from 'axios';
import { readdir } from 'fs';
import { Utilty } from '../utility';

@Injectable()
export class TransactionService {


    createTransaction(transaction: ITransaction) {

    }

    async getTransaction(hash :string): Promise<ITransaction | undefined> {
        //found if the hash is in the current node
        let hashPath: string = Utilty.DATA_PATH + "/hashes";
        let hfiles: string[];
        await readdir(hashPath, (err, files) => { hfiles = files; if(err) console.log(err); });

        if(hfiles != null) {
            await hfiles.forEach(file => {
                if(hash === file){
                    return Promise.resolve(require(`../${hashPath}/${file}`));
                }
            })
        }
       
        //if not in this node search in other nodes
        let nodesList: any[] = require(Utilty.NODES_LIST());
        await nodesList.forEach(node => {
            axios.get(`${node.host}:${node.host}/transaction/${hash}`).then((data: any) => {
                if(data == null) return;

                Utilty.fetchTransaction(data);
                return Promise.resolve(data);
            });
        })

        return Promise.resolve(undefined);
    }
}
