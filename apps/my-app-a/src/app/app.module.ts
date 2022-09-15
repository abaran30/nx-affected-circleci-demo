import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibAModule } from '@nx-affected-circleci-demo/my-lib-a';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MyLibAModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
