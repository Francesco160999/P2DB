import { Injectable } from '@nestjs/common';
import { ITransaction } from './transaction.interface';
import axios from 'axios';
import { readdirSync } from 'fs';
import { Utilty } from '../utility';
import * as nodes from '../../data/nodes.list.json';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionModel } from '../../models/transaction.model';

@Injectable()
export class TransactionService {

    constructor(private transactionRepository: Repository<TransactionModel>) { }

    async createTransaction(transaction: ITransaction): Promise<ITransaction | undefined> {
        let res = await this.transactionRepository.create(transaction);
        return res;
    }

    async getTransaction(hash :string): Promise<TransactionModel | undefined> {
        //found if the hash is in the current node
        let transaction = await this.transactionRepository.findOne({signature: hash});
        if(transaction != null){
            return Promise.resolve(transaction);
        }
    
        //if not in this node search in other nodes
        for(let node of nodes) {
            axios.get(`${node.host}:${node.host}/transaction/${hash}`).then((data: any) => {
                if(data == null) return;

                this.transactionRepository.create(data);
                return Promise.resolve(data);
            });
        }
    }

    async queryTransaction(query: any): Promise<ITransaction[]>{
        return await this.transactionRepository.find(query);
    }
}
