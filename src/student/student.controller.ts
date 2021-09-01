import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateStudentDTO, UpdateStudentDTO } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('/students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('/')
  getAll() {
    return this.studentService.getAll();
  }

  @Get('/:studentId')
  getById(@Param('studentId') studentId: string) {
    return this.studentService.getById(studentId);
  }

  @Post('/')
  create(@Body() student: CreateStudentDTO) {
    return this.studentService.create(student);
  }

  @Put('/:studentId')
  update(
    @Param('studentId') studentId: string,
    @Body() student: UpdateStudentDTO,
  ) {
    return this.studentService.update(studentId, student);
  }
}
