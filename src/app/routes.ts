import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {  
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'about', component: AboutComponent, resolve: {}},
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

