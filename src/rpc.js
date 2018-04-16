import axios from 'axios';

class Rpc {
    constructor() {
        this._defaults = {
            jsonrpc: '2.0',
            method: 'call'
        };
    }

    __jsonrpc(url, params) {
        return axios.post(url, {
            ...this._defaults,
            id: this.__generate_id(),
            params: params
        });
    }

    static __generate_id() {
        return Math.floor(Math.random() * 1000 * 1000 * 1000);
    }

    rpc(url, params){
        return this.__jsonrpc(url, params);
    }
}

export default Rpc;