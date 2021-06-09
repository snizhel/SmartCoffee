import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartCoffeeComponent } from './smart-coffee/smart-coffee.component';

@NgModule({
  declarations: [AppComponent, SmartCoffeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
