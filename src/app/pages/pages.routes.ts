import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard' } },
            {path: 'graphics', component: Graphics1Component, data: {titulo: 'Gráficas' } },
            {path: 'promises', component: PromisesComponent, data: {titulo: 'Promesas' } },
            {path: 'progress', component: ProgressComponent, data: {titulo: 'Progress' } },
            {path: 'rxjs', component: RxjsComponent, data: {titulo: 'Asíncronos' } },
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
