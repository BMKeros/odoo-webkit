import BaseModel from './base_model';
import _ from 'lodash';

class Model extends BaseModel {
    constructor(...args){
        super(...args);
    }

    call(...args){
        return super.call(...args);
    }
    
    /**
     * Creates a new record in db
     *
     * @param {Object} data field values to set on the new record
     * @returns {Promise}
     */
    create(data, options) {
        return super.call({
            method: 'create',
            args: [data],
            kwargs: { context: {}}
        });
    }

    /**
     * Saves the provided data in an existing db record
     *
     * @param {Number|String} id identifier for the record to alter
     * @param {Object} data field values to write into the record
     * @returns {Promise}
     */
    write(id, data, options = {}) {
        return super.call({
            method: 'write',
            args: [[id], data],
            kwargs: { context: {}}
        });
    }

    /**
     * Deletes an existing record from the database
     *
     * @param {Number|String} ids identifier of the record to delete
     * @returns {Promise}
     */
    unlink(ids) {
        return super.call({
            method: 'unlink',
            args: [ids],
            kwargs: { context: {}}
        });
    }
}

export default Model;
