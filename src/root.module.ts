import { Module,NestModule,MiddlewareConsumer } from '@nestjs/common';
import { OrderModule } from './orders.module';
import { UsersModule } from './users.module';
import { ChatModule } from './chat.module';
import { BookController } from './app.controller';
import { BookService } from './app.service';
import { BookMiddleware } from './app.middleware';



@Module({
  imports: [OrderModule,UsersModule,ChatModule],
  controllers: [BookController],
  providers: [BookService],
})
export class RouteModule implements NestModule{
  configure(consumer:MiddlewareConsumer){
    consumer.apply(BookMiddleware).forRoutes("book");
  }
}
