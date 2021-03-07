import { ITransaction } from "src/database/transaction/transaction.interface";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TransactionModel implements ITransaction {
    @Column()
    timestamp: number;
    @Column()
    owner: string;
    @Column()
    recepient: string;
    @Column()
    protocol: string;
    @Column()
    body: string;
    @PrimaryColumn()
    signature: string;
}