class Utils {
  /**
   * Serializes the sort criterion array of a dataset into a form which can be
   * consumed by OpenERP's RPC APIs.
   *
   * @param {Array} fields_criterion array of fields, from first to last criteria
   *  prefixed with '-' for reverse sorting
   * @returns {String} SQL-like sorting string (``ORDER BY``) clause
   */
  static serialize_sort(fields_criterion) {
    if (!Array.isArray(fields_criterion)) return false;
    return fields_criterion
      .map(criteria => ((criteria[0] === '-') ? (`${criteria.slice(1)} DESC`) : (`${criteria} ASC`))).join(', ');
  }

  /**
   * Read the cookie described by cookie_name
   *
   * @param {string} cookie_name
   * @returns {string}
   */
  static get_cookie(cookie_name) {
    const cookies = document.cookie ? document.cookie.split('; ') : [];
    for (let i = 0; i < cookies.length; i += 1) {
      const parts = cookies[i].split('=');
      const key = parts.shift();
      const value = parts.join('=');

      if (cookie_name && cookie_name === key) {
        return value;
      }
    }
    return '';
  }

  /**
   * Create a cookie
   * @param {String} name the name of the cookie
   * @param {String} value the value stored in the cookie
   * @param {Number} ttl time to live of the cookie in millis. -1 to erase the cookie.
   */
  static set_cookie(name, value, ttl) {
    const time_live = ttl || 24 * 60 * 60 * 365;
    const expires = new Date(new Date().getTime() + (time_live * 1000));
    document.cookie = [
      `${name}=${value}`,
      'path=/',
      `max-age=${ttl}`,
      `expires=${expires.toGMTString()}`,
    ].join(';');
  }
}

export default Utils;
