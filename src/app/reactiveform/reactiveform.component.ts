import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 
  //model
  myReactiveForm!: FormGroup; //declaration
  isSubmitted: boolean = false;

//ReactiveformComponent class is depend on 2 insatance
//we have injected two demo services
//by using constructor level.
  constructor(private __fb:FormBuilder,private _demoservice:DemoService) { 
    this.createform() 
  }
  get f() {
    return this.myReactiveForm.controls;
  }
  
  ngOnInit(): void {

//services
    this._demoservice.print();

    //example on setvalue=> we use when we can set default value for whole form
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'firstName': 'Rocky',
    //     'lastName': 'bhai',
    //     'address': {
    //       'state':'maharashtra',
    //       'district': 'pune',
    //       'taluka': 'mulshi',
    //       'village': 'hinjewadi'
    //     },
    //     'skills': [
    //       'Angular'
    //     ]
    //   })
    // },2000)

        //example on patchvalue-> we use this when we can set default only one value
        setTimeout(() => {
          this.myReactiveForm.patchValue({
            'skills': [
              'Angular'
            ]
          })
        },2000)


  }

  createform(){
    // this.myReactiveForm = new FormGroup({
  //     firstName: new FormControl('',[Validators.required, Validators.minLength(3) ,Validators.maxLength(15), this.FirstNameNotAllowed]),
  //     lastName: new FormControl('',[Validators.required, Validators.minLength(3) ,Validators.maxLength(15)]),
  //     address: new FormGroup({
  //       state : new FormControl(''),
  //       district : new FormControl(''),
  //       taluka : new FormControl(''),
  //       village : new FormControl('')
  //     }),
  //     skills: new FormArray([
  //       new FormControl('')
  //     ])

  //   })
  // }

  //************************************************ */
  //using formBuilder 
  //we can also give the default value
      this.myReactiveForm = this.__fb.group({
      firstName: ['codemind',[Validators.required, Validators.minLength(3) ,Validators.maxLength(15), this.FirstNameNotAllowed]],
      lastName: ['technology',[Validators.required, Validators.minLength(3) ,Validators.maxLength(15)]],
      address: this.__fb.group({
        state :['Maharashtra'],
        district :['Pune'],
        taluka :['Mulshi'],
        village :['Hinjewadi']
      }),
      skills: this.__fb.array([
        []
      ])

    })
  }


  get skills(){
    return this.myReactiveForm.get('skills') as FormArray
  }
  OnSubmit(){
    this.isSubmitted = true;
    console.log('reactive form created',this.myReactiveForm);

//services:
  this._demoservice.print();

    
  }
  OnAddSkill(){
    const skill = this.myReactiveForm.get('skills') as FormArray;
    skill.push(new FormControl(''));
  }

//custom validator function
  FirstNameNotAllowed(control: FormControl) : ValidationErrors | null {
    console.log('first name not allowed',control.value);

    //api to get names
    //store in variable
    const nameNotAllowed = ['codemind','jack'];
    const value = control.value as string;
    if (nameNotAllowed.indexOf(value) !== -1) {
      return {'FirstNameNotAllowed':true}
    }
    
    return null;

  }
  resetForm(){
    this.myReactiveForm.reset();
  }
//services
//this is the instance of demo service
Hello(){
  this._demoservice.Hello();

}

}
