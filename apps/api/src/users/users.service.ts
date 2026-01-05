import { Injectable } from '@nestjs/common';
import { InsertUser } from '@workspace/db/auth-types';

@Injectable()
export class UsersService {
  create(createUserDto: Omit<InsertUser, 'id' | 'createdAt' | 'updatedAt'>) {
    console.log(createUserDto);
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(
    id: number,
    updateUserDto: Partial<Omit<InsertUser, 'id' | 'createdAt' | 'updatedAt'>>,
  ) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
