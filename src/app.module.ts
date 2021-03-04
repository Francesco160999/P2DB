import { TransactionService } from './database/transaction/transaction.service';
import { TransactionController } from './database/transaction/transaction.controller';
import { PeerModule } from './peer/peer.module';
import { PeerService } from './peer/peer.service';
import { PeerController } from './peer/peer.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
        PeerModule, ],
  controllers: [
        TransactionController, 
        PeerController, AppController],
  providers: [
        TransactionService, 
        PeerService, AppService],
})
export class AppModule {}
