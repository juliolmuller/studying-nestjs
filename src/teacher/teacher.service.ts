import { Injectable } from '@nestjs/common';
import { teachers, students } from '../db';
import { TeacherResourceDTO } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;
  private students = students;

  getAll(): TeacherResourceDTO[] {
    return this.teachers;
  }

  getById(teacherId: string): TeacherResourceDTO {
    return this.teachers.find(({ id }) => id === teacherId);
  }
}
