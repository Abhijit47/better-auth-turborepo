import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import type { InsertUser } from '@workspace/db/auth-types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(
    @Body() createUserDto: Omit<InsertUser, 'id' | 'createdAt' | 'updatedAt'>,
  ) {
    return this.usersService.create(createUserDto);
  }

  @Get('session')
  getSession() {
    return { message: 'User session data would be here' };
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateUserDto: Partial<Omit<InsertUser, 'id' | 'createdAt' | 'updatedAt'>>,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
