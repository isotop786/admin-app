import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AbstractService } from './abstract.service';

@Module({
    imports:[
        JwtModule.register({
            global: true,
            secret: "jwtConstants.secret",
            signOptions: { expiresIn: '3666660s' },
          }),
    ],
    exports:[
        JwtModule,
        // AbstractService
    ],
    providers: []
})
export class CommonModule {}
