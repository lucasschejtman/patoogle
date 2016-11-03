import db from '../../core/db';

const Patent = db.model('Patent', {
  tableName: 'patents',
  hasTimestamps: true,
  company() {
    return this.belongsTo('Company', 'matched_company_id');
  }
});

export default Patent;
