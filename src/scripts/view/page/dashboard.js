import DataRestoran from "../../data/data-restoran";
import { RestoranListMap } from "../restoran-map/restoran-map";

const Dashboard = {
    async render(){
        return `
        <div class="heeding-daftar d-flex jcc mb-1">
            <h1>Daftar Restoran</h1>
        </div>
        <div class="list-produk">
            <div class="row" id="produk">
            </div>
        </div>
        `
    },

    async afterRender(){
        const restoran = await DataRestoran.listRestoran();        

        restoran.map((rs) => {            
            document.getElementById('produk').innerHTML += RestoranListMap(rs);
        })
    }
}

export default Dashboard;