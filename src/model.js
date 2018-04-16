import BaseModel from './base_model';

class Model extends BaseModel {
    constructor(...args){
        super(...args);

        this._filter = [];
        this._context = {};
    }

    /**
     * Set filter model
     * @param {Array} filters
     */
    set filter(filters) {
        this._filter = filters;
    }

    /**
     * Get filter model
     *
     * @returns {Array} [filter]
     */
    get filter() {
        return this._filter;
    }

    /**
     * Get context model
     *
     * @returns {Object}
     */
    get_context() {
        return this._context;
    }

    /**
     * ----------
     *
     * @returns {Promise}
     */
    call(...args){
        return super.call(...args);
    }

    /**
     * ----------
     *
     * @returns {Promise}
     */
    call_button(...args) {
        return super.call_button(...args);
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
            kwargs: {context: this.get_context()}
        });
    }

    /**
     * Saves the provided data in an existing db record
     *
     * @param {Number|String} id identifier for the record to alter
     * @param {Object} data field values to write into the record
     * @param {Object} options
     * @returns {Promise}
     */
    write(id, data, options = {}) {
        return super.call({
            method: 'write',
            args: [[id], data],
            kwargs: {context: this.get_context()}
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
            kwargs: {context: this.get_context()}
        });
    }

    /**
     * Count all records
     *
     * @returns {Promise}
     */
    count() {
        return super.call({
            method: 'search_count',
            args: [this._filter],
            kwargs: {context: this.get_context()}
        });
    }

    /**
     * Fetches the "readable name" for records, based on intrinsic rules
     *
     * @param {Array} ids
     * @returns {Promise}
     */
    name_get(ids = []) {
        return super.call({
            method: 'name_get',
            args: [ids],
            kwargs: {context: this.get_context()}
        });
    }
}

export default Model;