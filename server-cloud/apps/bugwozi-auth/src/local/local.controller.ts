import { Controller } from '@nestjs/common';
import { LocalService } from './local.service';

@Controller('local')
export class LocalController {
  constructor(
    private readonly service: LocalService
  ) { }
}
