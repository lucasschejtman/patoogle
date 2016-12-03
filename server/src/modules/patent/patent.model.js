import db from '../../core/db';

/* istanbul ignore next */
const Patent = db.model('Patent', {
  tableName: 'patents',
  hasTimestamps: true,
  company() {
    return this.belongsTo('Company', 'matched_company_id');
  }
});

export default Patent;
