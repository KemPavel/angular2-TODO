import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { TodoAppModule } from './app/todoApp.module';
import './assets/css/reset.css';
import './assets/css/main.css';
import './assets/css/utils.css';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TodoAppModule);
