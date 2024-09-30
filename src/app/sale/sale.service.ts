import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Column, Sale } from './sale';

@Injectable()
export class SaleService {

  #httpClient = inject(HttpClient);
  #baseUrl = 'http://localhost:3000';

  getSalesColumns(): Observable<Column[]> {
    return this.#httpClient.get<Column[]>(`${this.#baseUrl}/columns`);
  }

  getSalesData(sorts: string[]): Observable<Sale[]> {
    let sortsFilter = '';
    if (sorts.length) {
      sortsFilter += '?_sort='
      for (let i = 0; i < sortsFilter.length; i++) {
        sortsFilter += sortsFilter[i];
        if (i != sortsFilter.length - 1) {
          sortsFilter += ',';
        }
      }
    }
    return this.#httpClient.get<Sale[]>(`${this.#baseUrl}/sales${sortsFilter}`);
  }

  saveSale(sale: Sale): Observable<Sale> {
    return this.#httpClient.post<Sale>(`${this.#baseUrl}/sales`, sale);
  }

  updateSale(sale: Sale): Observable<Sale> {
    return this.#httpClient.patch<Sale>(`${this.#baseUrl}/sales/${sale.id}`, sale);
  }

  deleteSale(id: Sale['id']): Observable<void> {
    return this.#httpClient.delete<void>(`${this.#baseUrl}/sales/${id}`);
  }
}
