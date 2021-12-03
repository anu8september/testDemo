import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from './service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoProject';
 form:FormGroup
 submitted:boolean=false

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    gender:['',Validators.required]


  })
  }

  ngOnInit(){
    
   }
   SubmitForm(form:any){
     this.submitted=true
     console.log(form.value,"formData")
   } 
 
}
