import React, { useState , useEffect} from "react";
import Table from "../table/Table";
import TableHeader from "../table/TableHeader";
import { getApplicantData,deleteApplicant,updateApplicant } from "../../Services/Api";


function List() {

  var apniValues = [];
  const [userValues, setUserValues] = useState(apniValues);
  useEffect( ()=>{ ApplicantDetails(); } , [] );
  useEffect( ()=>{ ApplicantDetails(); } , [userValues] );


  const ApplicantDetails = async () => {
      const dat=await (await getApplicantData()).data;
    setUserValues(dat);
  };

  const handledelete=async (id)=>{
    await deleteApplicant(id);
    };
  
    const handleUpdate=async (id)=>{
      const newName=prompt("Enter name (Optional)");
      const newEmail=prompt("Enter mail (Optional)");
      await updateApplicant(id,newName,newEmail);
      };
    
  return (
    <div style={{backgroundColor:"#d0d0d0",color:"white"}}>
      <div className="row" style={{ width: "99vw" }}>
        <div className="col-2">
        
        </div>
        
        <div className="col-8" style={{color:"blue"}}>
          <TableHeader/>
          {userValues.map((simp,i)=>(

            <Table index={i} fname={simp.fname} email={simp.email} password={simp.password}  gender={simp.gender} id={simp._id}  handledelete={handledelete}  handleUpdate={handleUpdate}/>
          ))}
         
        </div>
        <div className="col-2">
        
        </div>
      </div>
    </div>
    
  );
  
}

export  default List;

