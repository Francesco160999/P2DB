import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ITransaction } from './transaction.interface';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {

    constructor(private readonly transactionService: TransactionService) { }

    @Post('/create')
    createTransaction(@Body() transaction: ITransaction){
        return this.transactionService.createTransaction(transaction);
    }

    @Get()
    getTransaction(@Param('hash') hash: string): ITransaction{
        return 
    }
}
