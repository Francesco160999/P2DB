import { TransactionService } from './database/transaction/transaction.service';
import { TransactionController } from './database/transaction/transaction.controller';
import { PeerModule } from './peer/peer.module';
import { PeerService } from './peer/peer.service';
import { PeerController } from './peer/peer.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
        PeerModule,
        TypeOrmModule.forRoot({
          type: 'sqlite',
          cache: true,
          
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'database',
          entities: [],
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
export class AppModule {}
