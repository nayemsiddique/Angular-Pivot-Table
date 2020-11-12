import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { PivotTableTestOneComponent } from './pivot-table-test-one/pivot-table-test-one.component';
import { WebdatarocksComponent } from './webdatarocks/webdatarocks.component';
@NgModule({
  declarations: [	
    AppComponent,
      PivotTableTestOneComponent,
      WebdatarocksComponent
   ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
