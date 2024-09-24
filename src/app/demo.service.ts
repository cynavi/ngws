import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  #httpClient = inject(HttpClient);

  getData() {
    return this.#httpClient.get(`https://64dc395ee64a8525a0f64b8b.mockapi.io/sales`);
  }
}
