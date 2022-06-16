import { application } from "express";
import hostelApplicationModel from "../models/HostelApplication.js"
import bcyrpt from "bcrypt";
import jwt from "jsonwebtoken";
// import { json } from "body-parser";


export const getApplication = async (req,res)=>{
    try {


        const hostelApplicationData= await hostelApplicationModel.find();
        // res.json(hostelApplicationData);
        res.send(hostelApplicationData);
    } catch (error) {
        console.log("data not found...")
            
    }
};

export const getUser = async (req,res)=>{
    try {
        const hostelApplicationData= await hostelApplicationModel.findById(req.id);
        // res.json(hostelApplicationData);
        res.send(hostelApplicationData);
    } catch (error) {
        console.log("data not found...")
            
    }
};


export const postApplication =async (req,res)=>{
    const password=req.body.password;
    const pass=bcyrpt.hashSync(password,12);
    const newApplicant = new hostelApplicationModel(
        // req.body
        { fname:req.body.fname,
        email: req.body.email,
        password:pass,
        gender: req.body.gender}
    );

    try {
        let existingUser;
        try {
          existingUser = await hostelApplicationModel.findOne({ email: req.body.email });
        } catch (err) {
          console.log(err);
        }
        if (existingUser) {
            console.log("exist");
           res.send("200");
        }else{

        await newApplicant.save();
        res.json({message:"added"});
        }
    } catch (error) {
        console.log("Not saved...")
    }
};

export const deleteApplication=async(req,res) =>{
    const id =req.params.id
    
    // res.cookie("jwToken","token",{ httpOnly: true });
        try {
            
            await hostelApplicationModel.findByIdAndRemove(id, function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Removed User : ", docs);
                }
            });
            res.send("Deleted...")
    
        } catch (error) {
            console.log("not deleted")
        }
    }

    export const updateApplication= async (req,res)=>{
        const id=req.body.id;
        const newname=req.body.fname;
        const newmail=req.body.email;
        try {
            
           let applicantToUpdate=await hostelApplicationModel.findById(id);

            if(newname){
                applicantToUpdate.fname=newname;
                if(newmail){
                    applicantToUpdate.email=newmail;
                }
                applicantToUpdate.save();
                 console.log("updated");
            }else{
                return console.log("empty name");
            }
            console.log("not updated");
            
        //    console.log(result);
        } catch (error) {
            console.log("not updated")
        }
    }





    export const LoginApplicants=async (req,res)=>{
        
            try {
        
                const{email,password}=req.body;
                const userlogin = await hostelApplicationModel.findOne({email:email});
               if (userlogin) {
                // console.log("loged in successfully");
                const isMatch= await bcyrpt.compare(password,userlogin.password);
                // const token= await userlogin.generateAuthToken();
                
                try {
                    var token = jwt.sign({_id:userlogin._id},process.env.secretKey,{expiresIn:"24hr"});                    
                } catch (error) {
                    console("token not generated")
                    console.log(error);
                }
                if (req.cookies[`${userlogin._id}`]) {
                    req.cookies[`${userlogin._id}`] = "";
                  }
                res.cookie("jwToken",token,{
                    path:"/",
                 expires:new Date(Date.now()+1000*86400),
                    httpOnly:true,
                    sameSite:"lax"
                });
                if (isMatch) {
                    console.log("loged in successfully");
                    res.send("200");
                    // return res.status(200).json({message:"login successfully"})
                } else {
                    console.log(" console Invalid credentials pass");
                    // return res.status(404).json({error:"Invalid credentials pass"});
                    res.send("404");
                }
        
               } else {
                console.log("Invalid credentials mail");
                // return res.status(400).json({error:"Invalid credentials pass"});
                res.send("404");
                // return res.status(404).json({error:"Invalid credentials mail"});
        
               }
        
            } catch (error) {
                console.log("not login")
                console.log(error)
            }
        }

export const refreshToken= (req,res)=>{
            const headers= req.headers.cookie;
            const token= headers.split("=")[1];
            if(!token){
                res.status(404).json({message:"token timeout"});
            }
            jwt.verify(String(token),process.env.secretKey,(err,user)=>{
                
                if(err){
                    return res.status(400).json({erros:"authentication failed"});
                }
                req.id=user._id;
                res.clearCookie("jwToken");
                req.cookies["jwToken"] = "";
        
                var token = jwt.sign({_id:user._id},process.env.secretKey,{expiresIn:"24hr"}); 
                // console.log(token);
                 res.cookie("jwToken",token,{
                            path:"/",
                            expires:new Date(Date.now()+1000*86400),
                            httpOnly:true,
                            sameSite:"lax"
                        });
                 console.log("refresh token");
                
            });
        
        }

export const verifyToken= (req,res,next)=>{
try {
    const headers= req.headers.cookie;
    const token= headers.split("=")[1];

    if(!token){
        res.status(404).json({message:"invlaid tooken"});
    }
    jwt.verify(String(token),process.env.secretKey,(err,user)=>{
        
        if(err){
            return res.status(400).json({erros:"invalid token"});
        }
        req.id=user._id;
        console.log("verified")
        
        
    })
next();
} catch (error) {
    res.send(false)
}
    
};

export const retrApplication=  async(req,res,next)=>{

    const id = req.id;
    let user;
    try {
        
        user= await hostelApplicationModel.findById(id,"-password");
        
    } catch (error) {
        console.log(error);
    }
    if (!user){
        console.log("user not found");
       
     }else {
        console.log("profile returned")
        res.status(200).json(user);
       
     }
}

export const verifyAuth= (req,res,)=>{
    try {
        const headers= req.headers.cookie;
        const token= headers.split("=")[1];
        jwt.verify(String(token),process.env.secretKey,(err,user)=>{
        
            if(user){
             res.send(true);
            }
            else{

             res.send(false);
            }  
         })
    } catch (error) {
        console.log("false");
        res.send(false);
    }
 
};



export const logout = (req, res) => {   

    try {
        
        const cookies = req.headers.cookie;
    const prevToken = cookies.split("=")[1];
    if (!prevToken) {
      return res.status(400).json({ message: "Couldn't find token" });
    }
    jwt.verify(String(prevToken), process.env.secretKey, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).json({ message: "Authentication failed" });
      }
      res.clearCookie("jwToken");
      req.cookies["jwToken"] = "";
      console.log("logout");
      return res.status(200).json({ message: "Successfully Logged Out" });
    });

    } catch (error) {
        console.log(error);
    }
    
  };
  