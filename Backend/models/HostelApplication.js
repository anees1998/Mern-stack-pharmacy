import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const secretKey="mbdvkjsdbvsbkvuibwuehkwevbdvjbyetvbucvrgergv";
// var jwt = require("jsonwebtoken");
const hostelApplicationStructuer = mongoose.Schema({

    fname:String,
    email: String,
    password: String,
    gender: String,
    // tokens:[{token:String}]
});

// hostelApplicationStructuer.methods.generateAuthToken= async function(){
//     try {
//         var token = jwt.sign({_id:this._id},secretKey);
//         this.tokens=this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     } catch (error) {
//         console("token not generated")
//         console.log(error);
//     }
// }

const hostelApplicationModel = mongoose.model('hostelApplication',hostelApplicationStructuer);

export default hostelApplicationModel;