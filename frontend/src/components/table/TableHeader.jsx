function TableHeader() {
    return ( 
        <div className="data-table">
        <h3 style={{color:"gray",marginTop:"40px",marginBottom:"40px",textAlign:"center"}}>Registered People</h3>
      <table className="table">
        <thead className="bg-light" style={{alignItems:"center"}} >
          <tr >
            <th className="col-1" scope="col">#</th>
            <th className="col-2" scope="col">Name</th>
            <th className="col-2" scope="col">Email</th>
            {/* <th className="col-2" scope="col">Password</th> */}
            <th className="col-1" scope="col">Gender</th>
            <th className="col-2" style={{alignItems:"left"}}scope="col">Update</th>
            
            {/* <th className="col-1" scope="col">Date</th> */}
          </tr>
        </thead>
        </table>
        </div>
     );
}

export default TableHeader;