import DataRestoran from "../../data/data-restoran";
import urlParser from "../../route/urlParser";
import { RestoranDetailMap } from "../restoran-map/restoran-map";
import { createLikeButtonTemplate } from "../button-like/buttonLike";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
    async render(){
        return `
        <div class="heeding-daftar d-flex jcc mb-1">
            <h1>Detail Restoran</h1>
        </div>
        <div id="likeButtonContainer"></div>
        <div class="list-produk">
            <div class="" id="produk">            
            </div>
        </div>
        `
    },

    async afterRender(){        
        const url = urlParser.parseActiveUrlWithoutCombiner();
        const restoran = await DataRestoran.detailRestoran(url.id);  

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restoran
        });

        let listMakanan = this.listMap(restoran.menus.foods);  
        let listMinuman = this.listMap(restoran.menus.drinks);          
        document.getElementById('produk').innerHTML = RestoranDetailMap({rs : restoran,listMakanan,listMinuman});        
    },

    listMap(rs){
        let arrTemp = [];
        rs.map(r => arrTemp.push(r.name));
        let stringList = ``;        
        for(let i=0;arrTemp.length > i ; i++){
            stringList += `<li>${i+1}.${arrTemp[i]}</li>`       
        }        
        return stringList
    },

    listReview(rs){
        let stringList = ``;
        rs.map(r => {
            stringList += `
            <div class="card shadow container-fluid mb-1 mt-1">        
                <h3>ady</h3>
                <h4>12 november 2022</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, reprehenderit. Ipsam dolores ducimus, distinctio adipisci optio temporibus aperiam porro mollitia.</p>       
            </div>  
            `
        })
        return stringList;
    }
}

export default Detail;