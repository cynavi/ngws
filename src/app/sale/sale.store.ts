import { computed, inject, Injectable, signal } from '@angular/core';
import { Column, Sale } from './sale';
import { Subject, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SaleService } from './sale.service';

type SaleState = {
  columns: Column[];
  data: Sale[];
  loaded: boolean;
  error: Error | null;
};

const initialState: SaleState = {
  columns: [],
  data: [],
  loaded: true,
  error: null
};

@Injectable()
export class SaleStore {

  readonly #salesService = inject(SaleService);

  readonly #state = signal<SaleState>(initialState);

  // state
  readonly columns = computed(() => this.#state().columns);
  readonly data = computed(() => this.#state().data);
  readonly loaded = computed(() => this.#state().loaded);
  readonly error = computed(() => this.#state().error);

  // events
  fetch$ = new Subject<void>();
  save$ = new Subject<Sale>();

  constructor() {
    this.fetch$.pipe(
      takeUntilDestroyed(),
      switchMap(() => this.#salesService.getSalesData([]))
    ).subscribe(response => this.#state.update(state => ({
      ...state,
      data: response
    })));
  }

}
