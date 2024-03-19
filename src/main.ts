import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { platformBrowser } from '@angular/platform-browser';

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
