import db from '../../core/db';

const Session = db.Model.extend({
  tableName: 'sessions'
});

export default Session;
