import axios from 'axios'
import Config from "../Config";

export class Api {

    static api = Api.createApi();

    static createApi() {
        console.log(Config.API_URL)
        let api = axios.create({
            baseURL: Config.API_URL,
            headers: {
                'Agent': 'BizimTicaretWeb/1.0'
            }
        });

        api.interceptors.response.use(function (response) {
            // Do something with response data
            return response;
        }, function (error) {
            //err.request;
            //err.response;
            //err.message
            //err.response.data
            if (error.response) {
                if (error.response.status === 500) {
                    alert('Sunucu hatası')
                } else if (error.response.status === 404) {
                    alert('Sayfa bulunamamdı')
                } else {
                    alert('Beklenmedik bir hata oluştur.')
                }
            } else {
                alert('Network hatası. API sunucusuna ulaşılamadı.')
            }
            return Promise.reject(error);
        });

        return api;
    }

    static register(data) {
        return this.api.post('/users', data)
    }

    static getProducts() {
        return this.api.get('/products?_page=1&_limit=20')
    }

    static getProduct(productId) {
        return this.api.get('/products/' + productId)
    }
}
