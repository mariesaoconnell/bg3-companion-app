db = require('./db');
jwt = require('jsonwebtoken');
dotenv = require('dotenv');

dotenv.config();

const secretKey = process.env.SECRET_KEY;

async function login(email, password) {
	// Connect to the database
	const connection = await db.getConnection();
	try {
		await connection.beginTransaction();

		// Check if the email and password match in the database
		const [user] = await connection.query(
			'SELECT * FROM users WHERE email = ? AND password = ?',
			[email, password]
		);

		if (user.length === 0) {
			// If there is no matching user, throw an error
			throw new Error('Invalid email or password');
		}

		// Handle successful login, e.g., return user information, generate a token, or set a session
    const userData = {
      userId: user[0].id,
      email: user[0].email
    }

    const token = jwt.sign(userData, secretKey, {expiresIn: '10h'});

    return token;

	} catch (err) {
		await connection.rollback();
		throw err;
	} finally {
		// Release the database connection
		connection.release();
	}
}


module.exports = {
  login
};
