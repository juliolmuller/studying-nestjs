import { Controller, Get, Param, Put } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';

@Controller('/teachers/:teacherId/students')
export class TeacherStudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('/')
  getAllStudentsForId(@Param('teacherId') teacherId: string) {
    return this.studentService.getAllByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateTeacherStudent(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ) {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
