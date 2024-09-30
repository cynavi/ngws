import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';
import { SaleStore } from './sale.store';
import { SaleService } from './sale.service';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    TableModule,
    DatePipe
  ],
  providers: [
    SaleStore,
    SaleService
  ],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent implements OnInit {

  store = inject(SaleStore);

  ngOnInit() {
    this.store.fetch$.next();
  }
}
