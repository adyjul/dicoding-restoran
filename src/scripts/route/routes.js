import Dashboard from "../view/page/dashboard";
import Detail from "../view/page/detail";
import Favorite from "../view/page/favorite.";

const routes = {
    '/' : Dashboard,
    '/detail/:id' : Detail,
    '/favorite' : Favorite
}

export default routes;