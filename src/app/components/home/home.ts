import { Component, OnInit } from '@angular/core';
import{Common} from '../../services/common'
import { Loader } from '../../services/loader';
import { Router } from '@angular/router';
import {Highligt} from '../../../../src/app/directives/highligt'

import {Highlightone} from '../../../../src/app/directives/highlightone'
import {ValidatePipe} from '../../pipes/validate-pipe'
import { NgFor } from '@angular/common';
import {Employee} from '../../services/employee'
@Component({
  selector: 'app-home',
  imports: [Highligt,Highlightone,ValidatePipe,NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  users:any
  errorMessage:any
    currentPage:any = 1;
  pageSize:any = 3;
  employees:any;
   employeesdata: any[] = [];
  constructor(
    private commonService:Common,
    public loaderService: Loader,
    private router: Router,
    private employeeService: Employee
  
  ){}

  ngOnInit(): void {
    debugger


    this.employeeService.getEmployees()
      .subscribe(data => {
        this.employeesdata = data;
      });

      console.log(this.employeesdata,'employee data')
  


    this.employees = [  
    { id: 1, name: 'John' },
    { id: 2, name: 'David' },
    { id: 3, name: 'Sam' },
    { id: 4, name: 'Peter' },
    { id: 5, name: 'James' },
    { id: 6, name: 'Tom' },
    { id: 7, name: 'Kevin' },
    { id: 8, name: 'Alex' },
     { id: 9, name: 'ram' }
  ];

  }


  CanActivateRoute()
  {
    debugger;
    this.router.navigate(['/admin']);
  }

  goToHome() {
  this.router.navigate(['/dashboard/dash']);
}
  clickEvent()
{
   debugger;
 this.commonService.getCommonService().subscribe({

      next: (data: any) => {
        this.users = data;
      },

      error: (err) => {
        console.log(err);

        if (err.status === 404) {

          this.errorMessage = 'Data not found';
           console.log(this.errorMessage,'err message')

        } else {

          this.errorMessage = 'Something went wrong';

        }
      }

    });
}


add(a: number, b: number) {
  return a + b;
}

Testevent()
{
  debugger;
}


  


   get paginatedEmployees() {
    debugger;
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    return this.employees.slice(start, end);
  }

  nextPage() {
    debugger;
    console.log('next button triggered')
    if (this.currentPage * this.pageSize < this.employees.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    debugger;
     console.log('previous button triggered')
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }




}





