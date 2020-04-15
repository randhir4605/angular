import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  _childVariable:String;

  @Input()
  set childVariable(message:String){
    this._childVariable=message+" modified";
  }
  

  @Output()
  childResponse=new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }
  
  sendResponse(){
    this.childResponse.emit("Yes Papa, I am fine ? Thank you.");
  }
}
