import Rpc from './rpc';

class Auth extends Rpc {
  constructor(...args) {
    super(args);
  }

  /**
   * Login session in odoo ERP
   * @param login username in odoo erp
   * @param password
   * @param db name of database use in odoo erp
   * @returns {Promise}
   */
  login(login, password, db = '') {
    return super.rpc('/web/session/authenticate', { login, password, db });
  }

  /**
   * Logout session in odoo ERP
   * @returns {Promise}
   */
  logout() {
    return super.rpc('/web/session/destroy', {});
  }

  /**
   * Get info current session in odoo ERP
   * @returns {Promise}
   */
  get_session() {
    return super.rpc('/web/session/get_session_info', {});
  }
}

export default Auth;
