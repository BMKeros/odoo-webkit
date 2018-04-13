import axios from 'axios';

class Rpc {
    constructor() {
        this._actions = {
            dataset_call: '/web/dataset/call',
            dataset_call_kw: '/web/dataset/call_kw',
            dataset_search_read: '/web/dataset/search_read',
            search_read: '/search_read',
        };
        
        this._defaults = {
            jsonrpc: '2.0',
            method: 'call'
        };
    }

    __jsonrpc(url, params) {
        return axios.post(url, {
            ...this._defaults,
            id: Math.floor(Math.random() * 1000 * 1000 * 1000),
            params: params
        });
    }

    __call(params) {
        return this.__jsonrpc(this._actions.dataset_call, params);
    }

    __call_kw(params) {
        return this.__jsonrpc(this._actions.dataset_call_kw, params);
    }

    rpc(url, params){
        return this.__jsonrpc(url, params);
    }
}

export default Rpc;