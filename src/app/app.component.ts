import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DemoService } from './demo.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, RouterLink],
  providers: [
    DemoService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  demoService = inject(DemoService);
  counter!: number;
  // subscription!: Subscription;
  unsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.demoService.counter$.pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(c => {
      this.counter = c;
      console.log('from first ', c);
    });
  }

  onIncrement(): void {
    this.demoService.increment();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    // this.subscription.unsubscribe();
  }
}
