import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  singlefield=new FormControl('');

  profileForm=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    address:new FormGroup({
      street:new FormControl(''),
      city:new FormControl(''),
      state: new FormControl(''),
      zip:new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
    
  }

  public updateField(){
    this.singlefield.setValue('Hello');
  }

  public onSubmit(){
    console.log(this.profileForm.value);
  }

}
