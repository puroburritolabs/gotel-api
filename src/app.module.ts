import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './modules/services/services.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [CategoriesModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
