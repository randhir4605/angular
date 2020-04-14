import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  singlefield=new FormControl('');
  addressArray:FormArray;

  profileForm=this.formBuilder.group({
    firstName:'',
    lastName:'',
    addressArray:this.formBuilder.array([ this.createAddress() ])
  });

  createAddress():FormGroup{
    return this.formBuilder.group({
      street:'',
        city:'',
        state:'',
        zip:''
    })
  }

  addAddress(){
    this.addressArray=this.profileForm.get('addressArray') as FormArray;  //initialtize the addressArray object otherwise undefined error generate
    this.addressArray.push(this.createAddress());
  }

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    
  }

  public updateField(){
    this.singlefield.setValue('Hello');
  }

  public onSubmit(){
    console.log(this.profileForm.value);
  }

}
