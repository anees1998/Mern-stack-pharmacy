import React from "react";
import './table.css'
import {MdDeleteForever,MdModeEdit} from "react-icons/md";
// import {deleteApplicant} from "../../Servifnamcolces/Api"

function table(props) {
  
  return (
    <div className="data-table">
      <table className="table">
        <tbody style={{alignItems:"center"}}  >
          <tr >
            <th className="col-1" scope="row">{props.index+1}</th>
            <td className="col-2">{props.fname}</td>
            <td className="col-2">{props.email}</td>
            {/* <td className="col-2">{props.password}</td> */}
            {/* <td className="col-2">{props.program}</td> */}
            <td className="col-1">{props.gender}</td>
            <td className="col-2" style={{justifyItems:"center"}}>
            <button type="button" className="btn btn-link" onClick={()=>{props.handleUpdate(props.id);}}><MdModeEdit/></button>
            <button type="button" className="btn btn-link" onClick={()=>{props.handledelete(props.id);}} ><MdDeleteForever/></button>
            </td>
            {/* <td className="col-1">{props.date}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default table;
