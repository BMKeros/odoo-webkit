import BaseModel from './base_model';

class Model extends BaseModel {
  constructor(...args) {
    super(...args);

    this._fields = [];
    this._order_by = [];
    this._offset = 0;
    this._limit = false;
    this._filter = [];
    this._context = {};
  }
  /**
   * Fields
   * @param {Array} fields
   */
  fields(fieldsParam) {
    return this.clone({ fields: fieldsParam });
  }

  /**
   * Filter
   * @param {Array} domain
   */
  filter(domain) {
    return this.clone({ filter: domain });
  }

  /**
   * Limit
   * @param {Number} limitParam
   */
  limit(limitParam) {
    return this.clone({ limit: limitParam });
  }

  /**
   * Offset
   * @param {Number} offsetParam
   */
  offset(offsetParam) {
    return this.clone({ offset: offsetParam });
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
  call(...args) {
    return super.call(...args);
  }

  /**
   *
   * @returns {Promise}
   */
  call_button(...args) {
    return super.call_button(...args);
  }

  /**
   *
   * @returns {Promise}
   */
  exec_workflow(id, signal) {
    return super.exec_workflow(id, signal);
  }

  /**
   * Clone model
   *
   * @returns {Object} [Model]
   */
  clone(propSet) {
    const modelClone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);

    Object.keys(propSet).forEach((key) => {
      switch (key) {
        case 'filter':
          modelClone._computedFilter(propSet[key]);
          break;
        case 'fields':
          modelClone._computedFields(propSet[key]);
          break;
        case 'limit':
          modelClone._limit = propSet[key];
          break;
        case 'offset':
          modelClone._offset = propSet[key];
          break;
        default:
          break;
      }
    });

    return modelClone;
  }

  /**
   * Creates a new record in db
   *
   * @param {Object} data field values to set on the new record
   * @param {Object} options
   * @returns {Promise}
   */
  create(data, options = {}) {
    return super.call({
      method: 'create',
      args: [data],
      kwargs: { context: this.get_context() },
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
      kwargs: { context: this.get_context() },
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
      kwargs: { context: this.get_context() },
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
      kwargs: { context: this.get_context() },
    }).then(response => response.data.result);
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
      kwargs: { context: this.get_context() },
    }).then(response => response.data.result);
  }

  /**
   *
   * @param {String} nameSearch name to perform a search for/on
   * @returns {Promise}
   */
  name_search(nameSearch = '') {
    return super.call('name_search', {
      name: nameSearch,
      args: this._filter,
      operator: 'ilike',
      context: this.get_context(),
      limit: this._limit,
    });
  }

  /**
   * Fetches all fields to model
   *
   * @returns {Promise}
   */
  get_fields() {
    return super.call({
      method: 'fields_get',
      kwargs: { context: this.get_context() },
    }).then(response => response.data.result);
  }

  /**
   * Fetches all records matching the query
   *
   * @returns {Promise}
   */
  all() {
    return this._execute().then(response => response.data.result);
  }

  /**
   * Execute query
   *
   * @returns {Promise}
   */
  get() {
    return this._execute().then(response => response.data.result);
  }

  _execute() {
    return super.search_read({
      fields: this._fields,
      domain: this._filter,
      context: this.get_context(),
      offset: this._offset,
      limit: this._limit,
      sort: this._order_by,
    });
  }

  _computedFilter(domain) {
    if (Array.isArray(domain)) {
      this._filter = this._filter.concat([domain]);
    }
  }

  _computedFields(fields) {
    if (Array.isArray(fields)) {
      this._fields = this._fields.concat(fields);
    }
  }
}

export default Model;
