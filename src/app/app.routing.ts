import { Routes, RouterModule } from '@angular/router';
import { PivotTableTestOneComponent } from './pivot-table-test-one/pivot-table-test-one.component';
import { ModuleWithProviders } from '@angular/core';
const routes: Routes = [
  { path:"pivot-table",component:PivotTableTestOneComponent },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
