import { Injectable } from '@angular/core';
import { Teacher } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  getTeachers(): Teacher[] {
    return [
      { id: '1', name: 'Teacher 1' },
      { id: '2', name: 'Teacher 2' },
      { id: '3', name: 'Teacher 3' },
    ];
  }

}
