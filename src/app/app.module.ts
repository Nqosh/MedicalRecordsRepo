import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
  declarations: [			
    AppComponent,
      NavComponent,
      AboutComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }