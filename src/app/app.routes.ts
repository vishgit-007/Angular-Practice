import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CakeComponent } from './cake/cake.component';
import { ContactComponent } from './contact/contact.component';
import { PastriesComponent } from './pastries/pastries.component';

export const routes: Routes = [
    {
        path: 'p-about',
        component: AboutComponent
    },
    {
        path: 'p-cake',
        component: CakeComponent
    },
    {
        path: 'p-contact',
        component: ContactComponent
    },
    {
        path: 'p-pastries',
        component: PastriesComponent
    }
];
