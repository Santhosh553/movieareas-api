import mangoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async() => {
    try{    
    await mangoose.connect(
       process.env.MONGODB_URI,
    );
    console.log("DB Connected");
}
catch(err){
    console.log(err);
    process.exit(1);
}

};

export default connectDB;