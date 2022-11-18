/* eslint-disable no-plusplus */
import DataRestoran from '../../data/data-restoran';
import urlParser from '../../route/urlParser';
import { RestoranDetailMap } from '../restoran-map/restoran-map';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div class="heeding-daftar d-flex jcc mb-1">
            <h1>Detail Restoran</h1>
        </div>
        <div id="likeButtonContainer"></div>
        <div class="list-produk">
            <div class="" id="produk">            
            </div>
        </div>
        `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const restoran = await DataRestoran.detailRestoran(url.id);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran,
    });

    const listMakanan = this.listMap(restoran.menus.foods);
    const listMinuman = this.listMap(restoran.menus.drinks);
    document.getElementById('produk').innerHTML = RestoranDetailMap({ rs: restoran, listMakanan, listMinuman });
  },

  listMap(rs) {
    // eslint-disable-next-line prefer-const
    let arrTemp = [];
    rs.map((r) => arrTemp.push(r.name));
    let stringList = '';
    for (let i = 0; arrTemp.length > i; i++) {
      stringList += `<li>${i + 1}.${arrTemp[i]}</li>`;
    }
    return stringList;
  },
};

export default Detail;
