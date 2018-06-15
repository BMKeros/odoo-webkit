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
}

export default Utils;
