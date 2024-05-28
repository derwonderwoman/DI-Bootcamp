import { db } from "../app.js";

export const register = async ({email, password}) => {
    try{
        const [user] = await db("users1").insert({email,password}, [
            "id",
            "email",
        ]);
        return user;
    }catch(error){
        console.log(error);
        throw new Error('hhhh');
    }
}

export const login = async(email) => {
    try{
        const user = await db("users1")
        .select("id", "email", "password")
        .where({email})
        .first();
        return user;
    }catch(error){
        console.log(error);
        throw new Error("login error", error)
    }
}

export const all = async () => {
    try{
        const users = await db ("users1")
        .select("id", "email")
        .orderBy("id")
        return users;
    }catch(error){
        console.log(error);
        throw new Error("error", error)
    }
}