/* eslint-disable array-callback-return */

import FavoriteRestoranDB from '../../data/data-favorite';
import { RestoranListMap } from '../restoran-map/restoran-map';

const Favorite = {
  async render() {
    return `<div class="heeding-daftar d-flex jcc mb-1">
            <h1>Favorite Restoran</h1>
        </div>
        <div id="likeButtonContainer"></div>
        <div class="list-produk">
            <div class="row" id="produk">            
            </div>
        </div>
        `;
  },

  async afterRender() {
    const restoran = await FavoriteRestoranDB.getAllRestoran();

    restoran.map((rs) => {
      document.getElementById('produk').innerHTML += RestoranListMap(rs);
    });
  },
};
export default Favorite;
