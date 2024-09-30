import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DemoSignalsComponent } from './demo-signals/demo-signals.component';
import { SaleComponent } from './sale/sale.component';

export const routes: Routes = [
  { path: '', component: SaleComponent },
  { path: 'demo', component: DemoSignalsComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
];
