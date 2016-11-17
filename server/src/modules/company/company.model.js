/* istanbul ignore next */

import db from '../../core/db';

const Company = db.model('Company', {
  tableName: 'companies',
  hasTimestamps: true
});

export default Company;
