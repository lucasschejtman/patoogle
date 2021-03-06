import db from '../../core/db';

/* istanbul ignore next */
const User = db.model('User', {
  tableName: 'users',
  hasTimestamps: true,
  sessions() {
    return this.hasMany('Session', 'user_id');
  }
});

export default User;
