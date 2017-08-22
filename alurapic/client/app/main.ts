import { platformCoreDynamic } from '@angular/compiler';
// Arquivo utilizado pelo Loader System.js
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// Recebe uma instancia de platformDynamic.
const platform = platformCoreDynamic();