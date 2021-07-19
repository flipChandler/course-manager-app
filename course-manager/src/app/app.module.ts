import { Error404Component } from './error-404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' // rota raiz
      },
      {
        path: '**', component: Error404Component // não encontrou a rota, 404
      }
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
