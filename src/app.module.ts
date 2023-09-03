import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { RoleModule } from './role/role.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';


@Module({
  imports: [
    ConfigModule.forRoot({
   
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql6.freesqldatabase.com',
      port: 3306,
      username: 'sql6642923',
      password: '2QPq3CmaN4',
      database: 'sql6642923',
      // entities: [],
      synchronize: true,
      autoLoadEntities:true
    })
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'nest_admin_db',
    //   // entities: [],
    //   synchronize: true,
    //   autoLoadEntities:true
    // })
    ,UserModule, AuthModule, CommonModule, RoleModule, ProductModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
 