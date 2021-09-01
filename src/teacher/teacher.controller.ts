import { Controller, Get, Param } from '@nestjs/common';
import { TeacherService } from './teacher.service';

@Controller('/teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get('/')
  getAll() {
    return this.teacherService.getAll();
  }

  @Get('/:teacherId')
  getById(@Param('teacherId') teacherId: string) {
    return this.teacherService.getById(teacherId);
  }
}
