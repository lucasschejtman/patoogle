import Session from './session.model';

const validate = async (decoded, request, callback) => {
  try {
    const session = await Session.forge({ 'session_id': decoded.sid }).fetch({ withRelated: ['user'], columns: ['session_id', 'user_id', 'end_ts'] });
    const isValid = session.get('session_id') && session.get('end_ts') === null;
    return callback(null, isValid, { role: isValid ? session.related('user').get('role') : 'GUEST' });
  } catch(err) {
    console.log(err);
    return callback(err, false);
  }
};

export default validate;
