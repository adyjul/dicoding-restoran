import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';
import '../styles/__navbar.css'
import '../styles/__utils.css';
import '../styles/__footer.css';


data.restaurants.map(rs => {
    document.getElementById('produk').innerHTML += `
    <div class="col-md-6">
        <div class="card shadow m-1">
            <img src="${rs.pictureId}" class="img-card-header col-md-6 " alt="" style="margin-right: 10px;width: 100%;height: 50%;">
            <div class="card-body container-fluid">
                <h1 class="judul">${rs.name}</h1>
                <p>Rating : ${rs.rating}</p>
                <p class="isi">${rs.description}</p>
            </div>
        </div>
    </div>
            `
})