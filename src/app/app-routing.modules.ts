import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { StartComponent } from './steps/start/star.component';
import { ForWhomComponent } from "./steps/for-whom/for-whom.component";
import { WhatHolidayComponent } from "./steps/what-holiday/what-holiday.component";
import { PriceStepComponent } from "./steps/price-step/price-step.component";
import { ResultComponent } from './result/result.component';
import { ItemDetailComponent } from './result/product-list/item-detail/item-detail.component';
import { ProductListComponent } from './result/product-list/product-list.component';
import { SingInComponent } from './auth/sing-in/sing-in.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { StepsComponent } from './steps/steps.component';


const appRoutes : Routes =[
    {
        path: "forgot-password",
        component: ForgotPasswordComponent
    },
    {
        path: "sing-in",
        component: SingInComponent
    },
    {
        path: "register-user",
        component: SingUpComponent
    },
    {
        path: 'steps',
        component: StepsComponent,
        children: [
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
        ]
    },
    {
        path: "result",
        component: ResultComponent,
        children: [
            {
                path: 'product-list',
                component: ProductListComponent,
            },
            {
                path: 'product-list/:id',
                component: ItemDetailComponent,
            }
        ]
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