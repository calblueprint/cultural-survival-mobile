import { app } from "./mongoDBApp"

export const createEmailPass = async (email:string, password:string) => {
    await app.emailPasswordAuth.registerUser({ email: email, password: password });
    console.log("registered user");
}

export const getAllUsers = async () => {
    return app.allUsers;
}