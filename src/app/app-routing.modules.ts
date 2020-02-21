import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { StartComponent } from './steps/start/star.component';
import { ForWhomComponent } from "./steps/for-whom/for-whom.component";
import { WhatHolidayComponent } from "./steps/what-holiday/what-holiday.component";
import { PriceStepComponent } from "./steps/price-step/price-step.component";
import { ResultComponent } from './result/result.component';

const appRoutes : Routes =[
    {
        path: "get-start",
        component: StartComponent
    },
    {
        path: "for-whom",
        component: ForWhomComponent
    },
    {
        path: "what-holiday",
        component: WhatHolidayComponent
    },
    {
        path: "price-step",
        component: PriceStepComponent
    },
    {
        path: "result",
        component: ResultComponent
    },
    {
        path: '',
        redirectTo: '/result',
        pathMatch: 'full'
    },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}