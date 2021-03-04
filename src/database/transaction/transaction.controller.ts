import { Body, Controller, Post } from '@nestjs/common';
import { ITransaction } from './transaction.interface';
import { TransactionService } from './transaction.service';

@Controller()
export class TransactionController {

    constructor(private readonly transactionService: TransactionService) { }

    @Post()
    createTransaction(@Body() transaction: ITransaction){
        return this.transactionService.createTransaction(transaction);
    }
}
