# odoo-webkit
Tools for development in web for odoo

# Setup
    npm i odoo-webkit
    
# Usage
    import { Model } from 'odoo-webkit';
    
    const task = Model('todo.task');
    
    // Method create ERP
    task.create({ name: "test", is_done: false }).then( response => console.log(response) );
    
    //Method write ERP
    task.write(1, { is_done: true }).then( response => console.log(response) );
    
    // Method unlink ERP
    task.unlink(1).then( response => console.log(response) );
    
