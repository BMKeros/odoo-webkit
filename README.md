# odoo-webkit
Tools for development in web for odoo

# Install with NPM
    npm i odoo-webkit

# Install with yarn
    yarn add odoo-webkit
    
# Usage class Model
    import { Model } from 'odoo-webkit';
    
    const task = Model('todo.task');
    
    // Method create ERP
    task.create({ name: "test", is_done: false }).then( response => console.log(response) );
    
    // Method write ERP
    task.write(1, { is_done: true }).then( response => console.log(response) );
    
    // Method unlink ERP
    task.unlink(1).then( response => console.log(response) );
    
# Usage class Auth
    import { Auth } from 'odoo-webkit';
    
    const auth = Auth();
    
    // Method login
    // parameters username, password, database
    auth.login('admin', 'admin', 'test').then( res => console.log(res) );
    
    // Method logout
    auth.logout().then( res => console.log(res) );
    
    
