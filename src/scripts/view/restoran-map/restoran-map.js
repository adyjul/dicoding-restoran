export const RestoranListMap = (rs) => `<div class="col-md-6">
<div class="card shadow m-1 content-produk">    
        <img class="lazyload" src="https://restaurant-api.dicoding.dev/images/small/${rs.pictureId}" class="img-card-header col-md-6 " alt="gambar-list" style="margin-right: 10px;width: 100%;height: 50%;">
        <div class="card-body container-fluid">
            <h1 class="judul" id="judul-restoran">
                <a href="/#/detail/${rs.id}" class="judul">${rs.name}</a>
            </h1>
            <p>Rating : ${rs.rating}</p>
            <p class="isi">${rs.description}</p>
        </div>
        </div>
    </div>
    `;

export const RestoranDetailMap = ({ rs, listMakanan, listMinuman }) => `
    <div class="row">
        <div class="col-md-6">
            <img src="https://restaurant-api.dicoding.dev/images/small/${rs.pictureId}" class="img-card-header col-md-6 " alt="gambar-detail" style="margin-right: 10px;width: 100%;height: 100%;">
        </div>
        <div class="col-md-6" style="margin-left:2rem" >
            <h1 class="judul">
                ${rs.name}
            </h1>
            <p class="text-muted-small">${rs.address}(${rs.city})</p>                                    
            <h2 style="margin-bottom:1rem;margin-top:1rem">Rating : ${rs.rating}</h2>
            <p class="isi-detail">${rs.description}</p>                        
        </div>        
    </div>  
    <hr/>
    <h1 class="judul">
        Makanan :
    </h1>
        <ul class="list">            
            ${listMakanan}
        </ul>
    <h1 class="judul">
        Minuman :
    </h1>
        <ul class="list">            
            ${listMinuman}
        </ul>
    <hr/>
    <h1 class="judul">
        Review :
    </h1>
    ${rs.customerReviews.map((r) => `
        <div class="card shadow container-fluid mb-1 mt-1">        
            <h3>${r.name}</h3>
            <h5 class="text-muted">${r.date}</h5>
            <hr>
            <p>${r.review}</p>       
        </div>    
    `)}    
`;
