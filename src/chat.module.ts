import { Module } from '@nestjs/common';
import { Feature3 } from './feature3.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';



@Module({
  imports: [Feature3, AuthModule, UsersModule],
  controllers: [],
  providers: [],
  exports:[],
})
export class ChatModule {
    constructor(){
        console.log('ChatModule')
    }
}