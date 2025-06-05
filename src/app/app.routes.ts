import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Página inicial',
        loadComponent: () => import('./pages/home/components/container/home.component').then(component => component.HomeComponent)
    }
];
