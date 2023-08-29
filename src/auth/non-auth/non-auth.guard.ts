import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class NonAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService
  ){}
  canActivate(
    context: ExecutionContext,
  ) {
    const request = context.switchToHttp().getRequest();
    const jwt = request.cookies['jwt']
    try{
      console.log("Non-Auth guard workingS")
      const token = this.jwtService.verify(jwt) 

      console.log(jwt )

      if(!jwt){
        return true;
      }

      return false;

    }catch(e){
      return false;
    }
  }
}
