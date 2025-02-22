import { Injectable } from '@nestjs/common';
import { CreateKgnbInput } from './dto/create-kgnb.input';
import { UpdateKgnbInput } from './dto/update-kgnb.input';

@Injectable()
export class KgnbService {
  create(createKgnbInput: CreateKgnbInput) {
    return 'This action adds a new kgnb';
  }

  findAll() {
    return `This action returns all kgnb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kgnb`;
  }

  update(id: number, updateKgnbInput: UpdateKgnbInput) {
    return `This action updates a #${id} kgnb`;
  }

  remove(id: number) {
    return `This action removes a #${id} kgnb`;
  }
}
