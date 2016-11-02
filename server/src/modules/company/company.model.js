import db from '../../core/db';

const Company = db.model('Company', {
  tableName: 'companies',
  timestamps: true
});

export default Company;
