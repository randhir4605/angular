import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const sequence = new Observable(this.sequenceSubscriber);
    console.log("16");
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });

    const sequence2 = new Observable(this.sequenceSubscriber);
    console.log("16");
    sequence2.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });
  }

  sequenceSubscriber(observer) {
    console.log(observer);
    observer.next(1);
    console.log(26);
    observer.next(2);
    console.log(28);
    observer.next(3);
    console.log(30);
    observer.complete();
  }

  
  
}
