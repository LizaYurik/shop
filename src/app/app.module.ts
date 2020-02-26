import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepsComponent } from './steps/steps.component';

import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForWhomComponent } from './steps/for-whom/for-whom.component';
import { WhatHolidayComponent } from './steps/what-holiday/what-holiday.component';
import { PriceStepComponent } from './steps/price-step/price-step.component'

import { AppRoutingModule } from './app-routing.modules';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './steps/start/star.component';
import { HeaderStepsComponent } from './steps/header-steps/header-steps.component';
import { HeaderResultComponent } from './result/header-result/header-result.component';
import { ItemDetailComponent } from './result/product-list/item-detail/item-detail.component';
import { ProductListComponent } from './result/product-list/product-list.component';
import { SingInComponent } from './auth/sing-in/sing-in.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    ForWhomComponent,
    WhatHolidayComponent,
    PriceStepComponent,
    ResultComponent,
    StartComponent,
    HeaderStepsComponent,
    HeaderResultComponent,
    ItemDetailComponent,
    ProductListComponent,
    SingInComponent,
    SingUpComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
