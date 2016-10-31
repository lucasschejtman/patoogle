import db from '../../core/db';

const User = db.Model.extend({
  tableName: 'users',
  timestamps: true
});

export default User;
