import { Component, computed, effect, OnInit, signal } from '@angular/core';

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  gender: 'Male' | 'Female' | 'Other';
}

@Component({
  selector: 'app-demo-signals',
  standalone: true,
  imports: [],
  templateUrl: './demo-signals.component.html',
  styleUrl: './demo-signals.component.css'
})
export class DemoSignalsComponent implements OnInit {

  num = 49;
  sqrtNum = Math.sqrt(this.num);

  number = signal<number>(49);
  sqrt = computed(() => Math.sqrt(this.number()));

  person = signal<Person>({
    name: {
      firstName: 'Adam',
      lastName: 'Young'
    },
    age: 35,
    gender: 'Male'
  });

  effect = effect(() => {
    if (this.number() == 100) {
      // chart delete and reconstruct
      console.log('Num value', this.number());
    }
  });

  // rxjs -- third party library
  // signals -- built in primitive type


  ngOnInit() {
    // this.number.set(12)
    setTimeout(() => this.number.set(100), 2000);
    setTimeout(() => this.num = 69, 2000);

    // const fname =  this.person().name.firstName;
  }
}
