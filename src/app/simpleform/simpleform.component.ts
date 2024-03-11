import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  formTitle : string = "Simple TDF";
  email: any = '';
  defaultCourse : string = "Angular";
  defaultGender :any = "male";


  genders = [
    {
      id:'1',
      value:'male'
    },
    {
      id:'2',
      value:'female'
    },
    {
      id:'3',
      value:'others'
    }
    
  ]
  employee = new Employee();
  isSubmitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  // OnSubmit(form:NgForm){
  //   console.log(form.value);
    
  OnSubmit(form: any){
    console.log(form.value);
    this.isSubmitted = true;

    //api true/false login(form.value)

    this.employee.email = form.value.userDetails.email;
    this.employee.password = form.value.userDetails.password;
    this.employee.course = form.value.course;
    this.employee.gender = form.value.gender;

    //api saveEmployee(employee);
  }
  onReset(myForm: NgForm){
    myForm.reset();
    this.isSubmitted = false;
    

  }

}
