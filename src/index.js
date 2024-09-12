import '../src/scss/main.scss';

import { runAlert } from './app/alert';
import { loadImgs } from './app/app';
import { loadNav } from './app/nav-script';
import { printArtWork } from './app/app';
import { displayArtOnCatalog } from './app/catalog';
// runAlert();
loadNav();
loadImgs();
printArtWork();
displayArtOnCatalog();
