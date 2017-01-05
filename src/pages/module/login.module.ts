import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
   LoginComponent
  ],
  imports: [
    IonicModule.forRoot(LoginComponent),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
   LoginComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
  exports:[LoginComponent]
})
export class LoginModule {}
