import axios from 'axios';

class Rpc {
  constructor() {
    this._defaults = {
      jsonrpc: '2.0',
      method: 'call',
    };
    this.instanceAxios = this.__makeAxios();
  }

  /**
   * Create axios instance
   *
   * @returns {Object} [Axios]
   */
  static __makeAxios() {
    const instance = axios.create();
    instance.interceptors.response.use((response) => {
      if (Object.prototype.hasOwnProperty.call(response.data, 'error')) {
        return Promise.reject(response.data.error);
      }
      return response;
    }, err => Promise.reject(err));

    return instance;
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
    return this.instanceAxios.post(url, {
      ...this._defaults,
      id: Math.floor(Math.random() * 1000 * 1000 * 1000),
      params,
    });
  }

  /**
   * Create axios request
   *
   * @param {String} url
   * @param {Object} params
   *
   * @returns {Promise}
   */
  rpc(url, params) {
    return this.__jsonrpc(url, params);
  }
}

export default Rpc;
