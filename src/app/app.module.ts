import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimatedBackgroundComponent } from './animated-background/animated-background.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimatedBackgroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
