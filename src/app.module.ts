import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './modules/prisma/services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
