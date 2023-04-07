import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BasicComponent } from './Components/basic/basic.component';
import { DirectivesExComponent } from './Components/directives-ex/directives-ex.component';
import { HighlightDirectiveDirective } from './custom/highlight-directive.directive';
import { PipeDemoComponent } from './Components/pipe-demo/pipe-demo.component';
import { CustomPipe } from './custom/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    DirectivesExComponent,
    HighlightDirectiveDirective,
    PipeDemoComponent,
    CustomPipe
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
