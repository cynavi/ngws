import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  observable$!: Observable<number | string>;

  ngOnInit(): void {
    this.observable$ = new Observable(subscriber => {
      subscriber.next(1);

      setTimeout(() => {
        subscriber.next('second')
      }, 3000);

      setTimeout(() => {
        subscriber.next('third')
      }, 0);

      subscriber.next('first');

      // subscriber.error('error occured');
      subscriber.complete();

      // subscriber.next('after error')
      subscriber.next('after complete')
    });

    setTimeout(() => {
      this.observable$.subscribe(val => console.log(val));
    }, 10000)


  }

}
