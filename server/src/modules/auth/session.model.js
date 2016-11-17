/* istanbul ignore next */

import db from '../../core/db';

const Session = db.model('Session', {
  tableName: 'sessions',
  user() {
    return this.belongsTo('User', 'user_id');
  }
});

export default Session;
