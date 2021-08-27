import { Controller, Get, Param } from '@nestjs/common';

@Controller('/teachers')
export class TeacherController {
  @Get('/')
  getAll() {
    return 'All teachers';
  }

  @Get('/:teacherId')
  getById(@Param('teacherId') teacherId: string) {
    return `Teacher with ID ${teacherId}`;
  }
}
