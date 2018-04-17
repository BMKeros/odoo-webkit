import Rpc from './rpc';

class Auth extends Rpc {
  constructor(args) {
    super(...args);
  }

  login(login, password, db = '') {
    return super.rpc('/web/session/authenticate', { login, password, db });
  }

  logout() {
    return super.rpc('/web/session/destroy', {});
  }
}

export default Auth;
