import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BasicComponent } from './Components/basic/basic.component';
import { DirectivesExComponent } from './Components/directives-ex/directives-ex.component';
import { HighlightDirectiveDirective } from './custom/highlight-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    DirectivesExComponent,
    HighlightDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
