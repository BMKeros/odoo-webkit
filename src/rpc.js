import axios from 'axios';

class Rpc {
    constructor() {
        this._defaults = {
            jsonrpc: '2.0',
            method: 'call'
        };
    }

    /**
     * Create axios request
     *
     * @param {String} url
     * @param {Object} params
     *
     * @returns {Promise}
     */
    __jsonrpc(url, params) {
        return axios.post(url, {
            ...this._defaults,
            id: this.__generate_id(),
            params: params
        });
    }

    /**
     * Generate unique id
     * @returns {Number}
     */
    static __generate_id() {
        return Math.floor(Math.random() * 1000 * 1000 * 1000);
    }

    /**
     * Create axios request
     *
     * @param {String} url
     * @param {Object} params
     *
     * @returns {Promise}
     */
    rpc(url, params){
        return this.__jsonrpc(url, params);
    }
}

export default Rpc;