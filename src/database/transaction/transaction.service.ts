import { Injectable } from '@nestjs/common';
import { ITransaction } from './transaction.interface';

import { readdir } from 'fs';

@Injectable()
export class TransactionService {

    
    createTransaction(transaction: ITransaction) {

    }

    async getTransaction(hash :string): Promise<ITransaction | undefined> {
        //found of the hash is in the node
        let hashPath: string = require('../config.json').dataPath;
        let hfiles: string[];
        await readdir(hashPath, (err, files) => { hfiles = files; if(err) console.log(err); });

        await hfiles.forEach(file => {
            if(hash === file){
                return require(`../${hashPath}/${file}`);
            }
        })

        //if not in this node search in other node

        return undefined;
    }
}
