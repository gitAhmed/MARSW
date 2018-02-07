import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { MainpagePage } from '../pages/mainpage/mainpage';
import { SignupPage } from '../pages/signup/signup';
import { ManageaccountPage } from '../pages/manageaccount/manageaccount';
import { AddincentivePage } from '../pages/addincentive/addincentive';
import { EditincentivePage } from '../pages/editincentive/editincentive';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainpagePage,
    SignupPage,
    ManageaccountPage,
    AddincentivePage,
    EditincentivePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainpagePage,
    SignupPage,
    ManageaccountPage,
    AddincentivePage,
    EditincentivePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}