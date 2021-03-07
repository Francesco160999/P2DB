import { TransactionService } from './database/transaction/transaction.service';
import { TransactionController } from './database/transaction/transaction.controller';
import { PeerModule } from './peer/peer.module';
import { PeerService } from './peer/peer.service';
import { PeerController } from './peer/peer.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionModel } from './models/transaction.model';
import { Connection } from 'typeorm';

@Module({
  imports: [
        PeerModule,
        TypeOrmModule.forRoot({
          type: 'sqlite',
          cache: true,
          database: '/src/data/database.db',
          entities: [TransactionModel],
          synchronize: true,
        }),
      ],
  controllers: [
        TransactionController, 
        PeerController, AppController],
  providers: [
        TransactionService, 
        PeerService, AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
