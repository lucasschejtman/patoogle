import db from '../../core/db';

/* istanbul ignore next */
const Session = db.model('Session', {
  tableName: 'sessions',
  user() {
    return this.belongsTo('User', 'user_id');
  }
});

export default Session;
