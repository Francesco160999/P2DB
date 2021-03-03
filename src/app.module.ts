import { PeerService } from './peer/peer.service';
import { PeerController } from './peer/peer.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
        PeerController, AppController],
  providers: [
        PeerService, AppService],
})
export class AppModule {}
