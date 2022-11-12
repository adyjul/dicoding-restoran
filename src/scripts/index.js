import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';
import '../styles/__navbar.css'
import '../styles/__utils.css';
import '../styles/__footer.css';
import App from './view/app.js';
import swRegister from './utils/sw-register';


const ElementHamburger = document.getElementById('hamburgerElement');
const ElementMenu = document.getElementById('menuElement');
const ElementContent = document.getElementById('main-content');

const app = new App({
    humberger : ElementHamburger,
    menu : ElementMenu,
    content : ElementContent
})

window.addEventListener('hashchange', () => {
    app.renderPage();
});
   
window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});