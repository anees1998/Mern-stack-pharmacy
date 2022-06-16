import axios from "axios";
axios.defaults.withCredentials=true;
export const addApplicant= async (applicationData)=>{
 
    return await axios.post("http://localhost:5000/hostelapp/signup",applicationData);
}

export const getApplicantData= async ()=>{
   return await axios.get("http://localhost:5000/hostelapp/list");
}

export const getProfileData= async ()=>{
   return await axios.get("http://localhost:5000/hostelapp/user",{withCredentials:true});
}

export const RefreshProfileData= async ()=>{
   return await axios.get("http://localhost:5000/hostelapp/refresh",{withCredentials:true});
}
export const AuthorizeUser= async ()=>{
   return await axios.get("http://localhost:5000/hostelapp/Authorize",{withCredentials:true});
}

export const Logoutuser= async ()=>{
   console.log("logout api");
   return await axios.post("http://localhost:5000/hostelapp/logout",{withCredentials:true});
}

export const deleteApplicant= async (userid)=>{
   return await axios.delete(`http://localhost:5000/hostelapp/delete/${userid}` );
}

export const updateApplicant= async (id,fname,email)=>{
   return await axios.put("http://localhost:5000/hostelapp/update",{id,fname,email});
}
export const LoginApplicant= async (applicationData)=>{
 
    return await axios.post("http://localhost:5000/hostelapp/login",applicationData);
}