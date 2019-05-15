import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly config = dotenv.parse(fs.readFileSync('.env'));

  get(key: string): string {
    return this.config[key];
  }
}
