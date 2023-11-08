db = require('./db');

async function signUp(email, password, username){
  // connect to db
  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    // check database for email
    const [existingUser] = await connection.query('SELECT * from users WHERE email = ?', [email]);
    const [existingUsername] = await connection.query('SELECT * FROM users WHERE username =?', [username])

    if(existingUser.length > 0 && existingUsername.length > 0){
      // if email exists throw error
      throw new Error('Email already exists.');
    } else {
      // if email does not exist create user
      const newUser = {email, password, username};
      await connection.query('Insert INTO users SET ?', newUser);

      // login user


      // commit transaction
      await connection.commit();
    }

  } catch(err) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = {
  signUp
};
