import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ApiServiceService } from './service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoProject';
  form: FormGroup
  submitted: boolean = false
  productdata: any = []
  filterText:any
  constructor(private fb: FormBuilder,private service:ApiServiceService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      color: ['', Validators.required],
      size: ['', Validators.required],
      quantity: ['', Validators.required]
    })

  }

  ngOnInit() {
    this.getData()

    const ProductArr = new FormArray([
      new FormControl('product1'),
      new FormControl('red'),
      new FormControl('10'),
      new FormControl('100')
    ])

  }
  SubmitForm(form: any) {
    this.submitted = true;
    console.log(this.form)
    if (this.form.status == "VALID") {
      this.productdata.push(form.value)
      console.log(form.value, "formData")
      let control: AbstractControl = null as any;
      form.reset()
      form.markAsUntouched(false);
      this.form.markAsPristine();
      Object.keys(this.form.controls).forEach(name => {
        control = this.form.controls[name];
        control.setErrors(null);
      });
    }
  }

  get registerFormControl() {
    return this.form.controls;
  }
  getData(){
    this.service.getProductData().subscribe((res:any)=>{
      console.log(res)
      this.productdata=res['ProductArray']

    })
  }
  onChange(event:any){
    console.log(event,"data")
  }
}
