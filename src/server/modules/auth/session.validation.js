import Session from './session.model';

const validate = async (decoded, request, callback) => {
  console.log('validate');
  try {
    const session = await Session.forge({ 'session_id': decoded.sid }).fetch({ columns: ['session_id', 'end_ts'] });
    return callback(null, (session.get('session_id') && session.get('end_ts') === null));
  } catch(err) {
    console.log(err);
    return callback(err, false);
  }
};

export default validate;
