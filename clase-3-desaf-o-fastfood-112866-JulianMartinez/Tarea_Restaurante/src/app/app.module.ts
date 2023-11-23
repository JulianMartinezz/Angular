import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { POSComponent } from './pos/pos.component';
import { CocinaComponent } from './cocina/cocina.component';
import { POEComponent } from './poe/poe.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    POSComponent,
    CocinaComponent,
    POEComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
