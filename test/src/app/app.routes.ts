import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { OtherComponent } from './other/other.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactComponent},
    {path: "home", component: LandingComponent},
    {path: "buy", component: BuyComponent},
    {path: "sell", component: SellComponent},
    {path: "other", component: OtherComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];
