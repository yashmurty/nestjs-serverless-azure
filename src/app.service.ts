import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'NestJS 7. Serverless Framework. Azure Functions.';
  }
}
