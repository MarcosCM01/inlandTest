import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {
  form!: FormGroup;

  constructor(public formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      addressStreet:['', {}],
      addressPostalCode:['',{}],
      clientName:['',{}],
      weight:['',{}],
      delivered:['',{}],
    });
  }
    submit(){
      console.log(this.form.getRawValue());
    }
}
