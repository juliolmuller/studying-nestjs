import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { students } from '../db';
import {
  CreateStudentDTO,
  StudentResourceDTO,
  UpdateStudentDTO,
} from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;

  public getAll(): StudentResourceDTO[] {
    return this.students;
  }

  public getById(studentId: string): StudentResourceDTO {
    return this.students.find(({ id }) => id === studentId);
  }

  getAllByTeacherId(teacherId: string): StudentResourceDTO[] {
    return this.students.filter(({ teacher }) => teacher === teacherId);
  }

  public create(payload: CreateStudentDTO): StudentResourceDTO {
    const student = { id: nanoid(), ...payload };

    this.students.push(student);
    return student;
  }

  update(studentId: string, payload: UpdateStudentDTO): StudentResourceDTO {
    const studentIndex = this.students.findIndex(({ id }) => id === studentId);

    if (studentIndex === -1) {
      throw new Error('Student not found');
    }

    const student = { ...this.students[studentIndex], ...payload };

    this.students.splice(studentIndex, 1, student);
    return student;
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResourceDTO {
    return this.update(studentId, { teacher: teacherId } as UpdateStudentDTO);
  }
}
