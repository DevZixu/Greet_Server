import bcrypt from "bcrypt";

let salt; 
const generateSalt = async (value) => {
    salt = await bcrypt.genSalt(value);
    console.log(salt);
};

const hashPass = async (passwrd) =>{
    let hashedPass = await bcrypt.hash(passwrd, salt )
    console.log(hashedPass)
}

await generateSalt(10)
hashPass("Slimbo");
