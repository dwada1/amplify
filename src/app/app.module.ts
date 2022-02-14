import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule
  ],
  providers: [
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * https://gerard-sans.medium.com/build-your-first-full-stack-serverless-app-with-angular-and-aws-amplify-d2e4716de9bd
 * 
 * import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
@NgModule({
  imports: [
    AmplifyAngularModule
  ],
  providers: [
    AmplifyService
  ]
});
 */
