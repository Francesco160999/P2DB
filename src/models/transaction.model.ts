import { ITransaction } from "src/database/transaction/transaction.interface";
import { PrimaryGeneratedColumn, Column } from "typeorm";

export class TransactionModel implements ITransaction {
    @Column()
    timestamp: number;
    @Column()
    owner: string;
    @Column()
    recepient: string;
    @Column()
    protocol: any;
    @Column()
    body: any;
    @Column()
    signature: string;
}