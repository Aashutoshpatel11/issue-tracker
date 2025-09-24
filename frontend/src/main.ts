import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [] // optionally add providers like services
}).catch(err => console.error(err));
