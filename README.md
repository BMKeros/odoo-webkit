# odoo-webkit  [![Build Status](https://travis-ci.org/BMKeros/odoo-webkit.svg?branch=master)](https://travis-ci.org/BMKeros/odoo-webkit)
Tools for development in web for odoo


## Installing

Using npm:

```bash
$ npm install odoo-webkit
```

Using yarn:

```bash
$ yarn add odoo-webkit
```

## Example

```js
import { Model } from 'odoo-webkit';

const ResUsers = new Model('res.users');

//Create new user
ResUsers.create({ name: 'testing' }).then(console.log);

//Search users
ResUsers.filter(['email', 'ilike', '@odoo.com']).get().then(console.log);

//Update user
ResUsers.write([1], { email: 'testing@odoo.com' }).then(console.log);

//Delete user
ResUsers.unlink([1]).then(console.log);
```

## odoo-webkit API

# Usage class Model
```js
import { Model } from 'odoo-webkit';

const task = new Model('todo.task');

// Method create ERP
task.create({ name: "test", is_done: false }).then(console.log);

// Method write ERP
task.write(1, { is_done: true }).then(console.log);

// Method unlink ERP
task.unlink(1).then(console.log);

//Search
task.filter(['is_done', '=', true]).get().then(console.log);

//Search and get especifict fields
task
  .fields(['name'])
  .filter(['is_done','=', false])
  .get()
  .then(console.log);

//Search all
task.all().then(console.log);

//Search and order
task
    .filter(['name','ilike','test'])
    .order_by('-id')
    .get()
    .then(console.log);

//count task
task.count();

//Search and limit
task
    .filter(['name','ilike','test2'])
    .order_by('name')
    .limit(100)
    .get()
    .then(console.log);

//How call function in ERP
task
    .call_button('_toggle_tasks', [data, context])
    .then(console.log)
```
    
# Usage class Auth
```js
import { Auth } from 'odoo-webkit';

const auth = new Auth();

// Method login
// parameters username, password, database
auth.login('admin', 'admin', 'test').then(console.log);

// Method logout
auth.logout().then(console.log);
```
