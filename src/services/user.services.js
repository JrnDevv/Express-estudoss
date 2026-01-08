import userRepositories from "../repositories/user.repositories.js";
import bcrypt from "bcrypt";

 async function createUserService (newUser) {
    //verifica se o usuário já existe//
    const foundUSer = await userRepositories.findUSerByemailRepository(newUser.email)
    if (foundUSer) throw new Error("User already exists")

    //criptografia da senha//
    const passHash = await bcrypt.hash(newUser.password, 10);
    const user =  await userRepositories.createUserRepository({...newUser, password: passHash})

    if (!user) throw new Error("User not created")
    return user;

}




 
export default {
    createUserService
}