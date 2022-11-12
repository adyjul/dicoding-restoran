const Drawer = {
    init({humberger,menu}){
        humberger.addEventListener('click', event => {
            this._toogleDrawer(event,menu)
        });
    },

    _toogleDrawer(event,menu){
        menu.classList.toggle('active');
        event.stopPropagation();
    }
}

export default Drawer;