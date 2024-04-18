const { db } = require("../config/data.js")
const bcrypt = require('bcrypt');

const _getAllUsers = () => {
    return db('users').select('id', 'email', 'username', 'first_name', 'last_name').orderBy("id")
}

// const _getUserById = (id) => {
//     return db('users').select('id', 'email', 'username', 'first_name', 'last_name').where({id: id})
// }
// const _loginUser = async (username, password_hash) => {
//     try {
//         const hashedPassword = await db('users')
//             .innerJoin('passwords', 'users.id', '=', 'passwords.user_id')
//             .select('passwords.password_hasg')
//             .where('users.username', username)
//             .first();

//         if (!hashedPassword) {
//             return false;
//         }

//         const hashedPasswordFromDb = hashedPassword.password_hash;

//         const match = bcrypt.compareSync(password_hash + "", hashedPasswordFromDb);

//         return match;
//     } catch (error) {
//         console.error('Error during login:', error);
//     }
// };

// const _searchUser = (username) => {
//     return db('users').select('id', 'email', 'username', 'first_name', 'last_name').where({username})
// }

// const _createUser = async (email, username, password_hash, first_name, last_name ) => {
//     let trx;
//     try {
//         trx = await db.transaction();

//         const user = await db('users')
//         .insert({email, username, first_name, last_name}, ["*"])
//         .transacting(trx);

//         const hash = bcrypt.hashSync(password_hash + "", 5)

//         const userObj = user[0];

//         await db('passwords')
//         .insert({password_hash: hash, user_id: userObj.id }, ["*"])
//         .transacting(trx)

//         await trx.commit()

//         console.log(user)
//     } catch (error) {
//         console.log(error)
//         await trx.rollback()
//     }
// }

// const _updateUser = async (id, email, username, password_hash, first_name, last_name) => { 
//     let trx;
//     try {
//         trx = await db.transaction();

//         const [user] = await db('users')
//             .update({ email, username, first_name, last_name }, ['*'])
//             .where({ id })
//             .transacting(trx);

//         const hash = bcrypt.hashSync(password_hash + "", 5)

//         await db('passwords')
//             .update({ password_hash: hash, user_id: id })
//             .where({user_id: id})
//             .transacting(trx);

//         await trx.commit();

//         console.log(user)
//     } catch (error) {
//         console.error(error);
//         await trx.rollback();
//     }
// }

module.exports = {
    _getAllUsers,
    // _getUserById,
    // _createUser,
    // _updateUser,
    // _loginUser,
    // _searchUser
}