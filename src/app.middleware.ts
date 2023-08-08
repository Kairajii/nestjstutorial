import {Injectable,NestMiddleware} from '@nestjs/common'
import { Request,Response,NextFunction } from 'express';
@Injectable()
export class BookMiddleware implements NestMiddleware{
    use(req:Request,res:Response,next:NextFunction){
        console.log("this is class based middleware implemented for book module");
        let protocol = req.protocol;
        let host = req.get("hodt");
        let url = req.originalUrl;
        let method = req.method;
        let date = new Date().toDateString();
        console.log(protocol+" "+host+" "+url+" "+method+" "+date) 
        next();
    }
}