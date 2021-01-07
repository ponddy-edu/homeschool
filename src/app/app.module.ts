import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsCounterComponent } from './analytics-counter/analytics-counter.component';

import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents :  [
    AnalyticsCounterComponent
 ]
})
export class AppModule {
  constructor(private injector : Injector){}
  ngDoBootstrap(){
      const el = createCustomElement(AnalyticsCounterComponent, {injector : this.injector});
  customElements.define('analytics-counter',el);
  }
  }
