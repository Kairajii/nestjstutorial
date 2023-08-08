import { NestFactory } from '@nestjs/core';
import { RouteModule } from './root.module';
import { NextFunction,Request,Response } from 'express';


//global middleware
function globalMiddlewareOne(req:Request , res:Response, next:NextFunction){
  console.log("This is the global middleware number 1");
  next();
}
function globalMiddlewareTwo(req:Request , res:Response, next:NextFunction){
  console.log("This is the global middleware number 2");
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RouteModule);
  app.use(globalMiddlewareOne);
  app.use(globalMiddlewareTwo);
  await app.listen(5000);
}
bootstrap();
