import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component implements OnInit, OnDestroy {

  demoService = inject(DemoService);
  unsubscribe = new Subject<void>();

  constructor() {
    // inject(DestroyRef).onDestroy(() => {
    //   this.unsubscribe.next();
    //   this.unsubscribe.complete();
    // });
  }

  ngOnInit() {
    this.demoService.counter$.pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(v => console.log('from page 2', v));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
