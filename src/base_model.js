import Rpc from './rpc';

class BaseModel extends Rpc {
  constructor(name) {
    super();
    this.name = name;
  }

  call({ method, args = [], kwargs = {} }) {
    const url = `/web/dataset/call_kw/${this.name}/${method}`;
    return super.rpc(url, {
      model: this.name, method, args, kwargs,
    });
  }

  search_read({
    fields = false, domain, context, offset, limit, sort,
  }) {
    return super.rpc('/web/dataset/search_read', {
      model: this.name, fields, domain, context, offset, limit, sort,
    });
  }

  call_button(method, args = []) {
    return super.rpc('/web/dataset/call_button', {
      model: this.name, method, domain_id: null, context_id: args.length - 1, args,
    });
  }

  exec_workflow(id, signal) {
    return super.rpc('/web/dataset/exec_workflow', { model: this.name, id, signal });
  }
}

export default BaseModel;
