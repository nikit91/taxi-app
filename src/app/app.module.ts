import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AgmCoreModule} from '@agm/core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAxUekBF53KAP8t8oFuNYZUG-CF3UC0fes'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
