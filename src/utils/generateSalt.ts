import bcrypt from "bcrypt"

const generateSalt = async (value:Number) =>{
    let salt = await bcrypt.genSalt(10)
    console.log(salt);
}