import {db} from "../config/data.js";
import bcrypt from "bcrypt";


export const _getAllUsers = () => {
    return db("users").select ("id", "first_name", "last_name", "email", "username");
};
  
export const _getUserById = (id) => {
    return db("users").select ("id", "first_name", "last_name", "email", "username").where({ id: id });
  };
  
export const _registerUser = async (first_name,last_name,email,username,password_hash) => {
    let trx;
    try {
        trx = await db.transaction();
        const user = await db('users')
        .insert({first_name, last_name, email, username}, ["*"])
        .transacting(trx);
        const hash = bcrypt.hashSync(password_hash + "", 5)
        const userObj = user[0];
        await db('passwords')
        .insert({password_hash: hash, user_id: userObj.id }, ["*"])
        .transacting(trx)
        await trx.commit()
        return userObj;
    } catch (error) {
        console.log(error)
        await trx.rollback()
    }
};

export const _updateUser = async (id, email, username, password_hash, first_name, last_name) => {
    let trx;
    try {
        trx = await db.transaction();
        const [user] = await db('users')
            .update({ email, username, first_name, last_name }, ['*'])
            .where({ id })
            .transacting(trx);
        const hash = bcrypt.hashSync(password_hash + "", 5)
        await db('passwords')
            .update({ password_hash: hash, user_id: id })
            .where({user_id: id})
            .transacting(trx);
        await trx.commit();
        console.log(user)
    } catch (error) {
        console.error(error);
        await trx.rollback();
    }
};

export const _loginUser = async (username, password_hash) => {
    try {
        const user = await db('users')
            .join('passwords', {'users.id':'passwords.user_id'})
            .select('passwords.password_hash')
            .where({'users.username':username})
            .first();
        if (!user) {
            return false;
        }
        const hashedPasswordFromDb = user.password_hash;
        const match = bcrypt.compareSync(password_hash + "", hashedPasswordFromDb);
        return match;
    } catch (error) {
        console.error('Error during login:', error);
    }
};
  