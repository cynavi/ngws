import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    TableModule,
    DatePipe
  ],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {

}
