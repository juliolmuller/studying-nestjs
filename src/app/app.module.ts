import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { TeacherController } from '../teacher/teacher.controller';
import { TeacherStudentController } from '../teacher/student.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, TeacherStudentController],
  providers: [],
})
export class AppModule {}
