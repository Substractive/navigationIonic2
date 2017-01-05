import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { Child } from '../pages/child/child';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginModule} from '../pages/module/login.module'
//import {LoginComponent} from '../pages/module/login.component';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    Child,
    TabsPage
  ],
  imports: [
    LoginModule,
    IonicModule.forRoot(MyApp),
    // IonicModule.forRoot(LoginComponent),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    Child,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {

}
