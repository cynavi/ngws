import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [],
  templateUrl: './page1.component.html',
  providers: [],
  styleUrl: './page1.component.css'
})
export class Page1Component implements OnInit, OnDestroy {

  demoService = inject(DemoService);
  counter!: number;
  sub!: Subscription;

  ngOnInit() {
    this.sub = this.demoService.counter$.subscribe(v => {
      this.counter = v;
      console.log('from page 1', v);
    });
  }

  onIncrement(): void {
    this.demoService.increment();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
