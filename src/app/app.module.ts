import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';

// Rutas
import { APP_ROUTING } from './app.routes.module';

// Servicios

import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [AppComponent, BodyComponent],
  imports: [BrowserModule, APP_ROUTING, QRCodeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
