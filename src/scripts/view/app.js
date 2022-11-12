import Drawer from "../utils/drawer";
import urlParser from "../route/urlParser";
import routes from '../route/routes';

class App{
    constructor({humberger,menu,content}){        
        this._humberger = humberger;
        this._menu = menu;
        this._content = content

        this._initialAppShel();
    }

    _initialAppShel(){        
        Drawer.init({
            humberger : this._humberger,
            menu : this._menu
        })
    }

    async renderPage() {
        const url = urlParser.parseActiveUrlWithCombiner();        
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
    
}

export default App;