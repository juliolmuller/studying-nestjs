import { Body, Controller, Get, Param, Put } from '@nestjs/common';

@Controller('/teachers/:teacherId/students')
export class TeacherStudentController {
  @Get('/')
  getAllStudentsForId(@Param('teacherId') teacherId: string) {
    return `All students for teacher with ID ${teacherId}`;
  }

  @Put('/:studentId')
  updateTeacherStudent(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() student,
  ) {
    return `Updating student with ID ${studentId} of teacher with ID ${teacherId}: ${JSON.stringify(
      student,
    )}`;
  }
}
