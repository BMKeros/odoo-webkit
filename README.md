# odoo-webkit  [![Build Status](https://travis-ci.org/BMKeros/odoo-webkit.svg?branch=master)](https://travis-ci.org/BMKeros/odoo-webkit)
Tools for development in web for odoo

# Install with NPM
    npm i odoo-webkit

# Install with yarn
    yarn add odoo-webkit
    
# Usage class Model
```js
import { Model } from 'odoo-webkit';

const task = Model('todo.task');

// Method create ERP
task.create({ name: "test", is_done: false }).then(console.log);

// Method write ERP
task.write(1, { is_done: true }).then(console.log);

// Method unlink ERP
task.unlink(1).then(console.log);
```
    
# Usage class Auth
```js
import { Auth } from 'odoo-webkit';

const auth = Auth();

// Method login
// parameters username, password, database
auth.login('admin', 'admin', 'test').then(console.log);

// Method logout
auth.logout().then(console.log);
```

    
