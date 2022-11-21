import { realm, db } from "./mongoDBApp"

const coll = db.collection("users");

export const createEmailPass = async (email:string, password:string) => {

}

export const getAllUsers = () => {
    const allUsers = coll.find();
    allUsers.forEach(user => {
        console.log(user)
    });
}