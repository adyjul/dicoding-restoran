import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/__navbar.css';
import '../styles/__utils.css';
import '../styles/__footer.css';
import App from './view/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const ElementHamburger = document.getElementById('hamburgerElement');
const ElementMenu = document.getElementById('menuElement');
const ElementContent = document.getElementById('main-content');

const app = new App({
  humberger: ElementHamburger,
  menu: ElementMenu,
  content: ElementContent,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
