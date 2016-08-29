import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { bootstrap } from '@angular/platform-browser-dynamic';

// core
import { TODO_STORE_PROVIDER } from './core/store';

// root component
import { App } from './views/app';

// common styles
import './views/common/styles.scss';

// enable prod for faster renders
enableProdMode();

bootstrap(App, [
  disableDeprecatedForms(),
  provideForms(),
  TODO_STORE_PROVIDER
]).catch(error => console.error(error));
