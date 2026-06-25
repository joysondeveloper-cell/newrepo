import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Employee {


   private http = inject(HttpClient);

  getEmployees() {
    return this.http.get<any[]>(
      'http://localhost:3000/employees'
    );
  }
}
