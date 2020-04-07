import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoot(): string {
    return 'NestJS 7. Serverless Framework. Azure Functions.';
  }

  getHello(): string {
    return 'Hello World!';
  }
}
