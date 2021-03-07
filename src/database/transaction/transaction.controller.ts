import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ITransaction } from './transaction.interface';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {

    constructor(private readonly transactionService: TransactionService) { }

    @Post('create')
    async createTransaction(@Body() transaction: ITransaction): Promise<ITransaction> {
        return await this.transactionService.createTransaction(transaction);
    }

    @Get('get/:hash')
    async getTransaction(@Param('hash') hash: string): Promise<ITransaction>{
        return await this.transactionService.getTransaction(hash);
    }

    @Post('query')
    async queryTransaction(@Body() query:any): Promise<ITransaction[]> {
        return await this.transactionService.queryTransaction(query);
    }
}
