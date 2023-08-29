import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_admin_db',
      // entities: [],
      synchronize: true,
      autoLoadEntities:true
    })
    ,UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 