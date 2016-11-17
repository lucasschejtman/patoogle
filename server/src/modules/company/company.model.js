import db from '../../core/db';

/* istanbul ignore next */
const Company = db.model('Company', {
  tableName: 'companies',
  hasTimestamps: true
});

export default Company;
