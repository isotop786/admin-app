import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports:[
        JwtModule.register({
            global: true,
            secret: "jwtConstants.secret",
            signOptions: { expiresIn: '3666660s' },
          }),
    ],
    exports:[
        JwtModule
    ]
})
export class CommonModule {}
