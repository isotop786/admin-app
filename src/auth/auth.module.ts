import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { CommonModule } from '../common/common.module';

@Module({
  imports:[
    UserModule,
    CommonModule
    // JwtModule.register({
    //   global: true,
    //   secret: jwtConstants.secret,
    //   signOptions: { expiresIn: '3666660s' },
    // }),
  ],
  controllers: [AuthController]
})
export class AuthModule {}
