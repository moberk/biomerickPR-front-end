import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PromisesComponent,
    RxjsComponent
    ],
    exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component
    ],
    imports: [
    SharedModule,
    PAGES_ROUTES,
    ]
})

export class PageModule { }
