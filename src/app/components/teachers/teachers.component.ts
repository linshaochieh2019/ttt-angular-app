import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../interfaces/teacher.service';
// import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  teachers: any[] = []; // Store the list of teachers

  // constructor(private firestoreService: FirestoreService) {}
  constructor(private teacherService: TeacherService) {}


  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.teachers = this.teacherService.getTeachers();
  }
}
