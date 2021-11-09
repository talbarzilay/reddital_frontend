import axios from 'axios';

class webRequestService {

    #URL = "http://localhost:8080";

    static classInstance = null;

    static getInstance() {
        if (webRequestService.classInstance === null) {
            webRequestService.classInstance = new webRequestService();
        }
        return this.classInstance;
    }
    
    post(uri, payload, callback = (res) =>{}) {
        axios.post(this.#URL + uri, payload)
            .then(callback);
    }
};

export default webRequestService;