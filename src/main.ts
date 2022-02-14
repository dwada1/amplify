import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
import amplify from './aws-exports';
Amplify.configure(amplify);

/* Troubleshooting import amplify from './aws-exports'
https://duncanleung.com/aws-amplify-aws-exports-js-typescript/
*/

/* https://gerard-sans.medium.com/build-your-first-full-stack-serverless-app-with-angular-and-aws-amplify-d2e4716de9bd
import Amplify from 'aws-amplify';
import amplify from './aws-exports';
Amplify.configure(amplify);
*/

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
