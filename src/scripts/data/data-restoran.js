import API_ENDPOINT from "../globals/end-point";

class DataRestoran{
    static async listRestoran(){
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants
    }

    static async detailRestoran(id){
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        
        return responseJson.restaurant
    }
}

export default DataRestoran;