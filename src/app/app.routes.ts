import { Routes } from '@angular/router';
import { MorningCoffeeComponent } from './morning-coffee/morning-coffee.component';
import { Error404Component } from './app/error404/error404.component';

export const routes: Routes = [
    {path:'',component:MorningCoffeeComponent},
    {path:'**',component:Error404Component},


];
