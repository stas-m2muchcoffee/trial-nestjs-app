import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: Request, res: any, next: () => void) {
    this.logger.log(`${req.method}, ${req.originalUrl}`);
    next();
  }
}
