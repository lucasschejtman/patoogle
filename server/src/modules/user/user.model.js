import db from '../../core/db';

const User = db.model('User', {
  tableName: 'users',
  timestamps: true,
  sessions() {
    return this.hasMany('Session', 'user_id');
  }
});

export default User;
