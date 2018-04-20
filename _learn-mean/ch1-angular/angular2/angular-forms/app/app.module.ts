import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { SiteFormComponent } from './site-form.component'; // 添加site-form组件

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SiteFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
