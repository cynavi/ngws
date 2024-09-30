import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DemoService {

  private counter = new BehaviorSubject<number>(0);

  get counter$() {
    return this.counter.asObservable();
  }

  increment(): void {
    // if (this.counter.value === 10) {
    //   this.counter.complete();
    // } else {
    //   this.counter.next(this.counter.value + 1);
    // }
    this.counter.next(this.counter.value + 1);
  }
}
