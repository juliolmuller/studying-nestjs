import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('/students')
export class StudentController {
  @Get('/')
  getAll() {
    return 'All students';
  }

  @Get('/:studentId')
  getById(@Param('studentId') studentId: string) {
    return `Student with ID ${studentId}`;
  }

  @Post('/')
  create(@Body() student) {
    console.log(student);
    return `New student: ${JSON.stringify(student)}`;
  }

  @Put('/:studentId')
  update(@Param('studentId') studentId: string, @Body() student) {
    return `Updating student with ID ${studentId}: ${JSON.stringify(student)}`;
  }
}
