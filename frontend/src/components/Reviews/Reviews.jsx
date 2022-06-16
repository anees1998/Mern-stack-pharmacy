import React from 'react'
import "./Reviews.css"
export default function Reviews() {
  return (
    <div style={{backgroundColor:"#F9F9F9",marginTop:"-10px"}}>
         <h2
          style={{
            textAlign: "center",
            color: "black",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            paddingTop: "20px",
            color:"#7D5A50"
            
          }}
        >
          Reviews 
        </h2>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="cardswrapper" >
              <div className="card ccard" style={{}}>
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title" style={{color:"#FFEBC9"}}>Abdul Ahad</h5>
                  <p className="card-text" style={{color:"#753422 "}}>It's been always amazing and wonderful. In khanewal DawaiLo really customer oriented and facilitating professionally. Stay Blessed</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
              <div className="card d-none d-md-block">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title" style={{color:"#FFEBC9"}}>Umer Naseem</h5>
                  <p className="card-text" style={{color:"#753422 "}}>I always buy medicine from DawaiLo, because the services are amazing, plus I find whatever I need.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
              <div className="card d-none d-md-block">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title" style={{color:"#FFEBC9"}} >Usama Dilawar</h5>
                  <p className="card-text" style={{color:"#753422 "}}>Complete trust and best services. M fully satisfied and will visit Servaid again and again.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cardswrapper">
              <div className="card">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title" style={{color:"#FFEBC9"}}>Faiq Farooq</h5>
                  <p className="card-text" style={{color:"#753422 "}}>My experience with DawaiLo has been really good and i always recommend Dawailo as my primary pharmacy to all my peers.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
              <div className="card d-none d-md-block">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title" style={{color:"#FFEBC9"}}>Abu Bakr</h5>
                  <p className="card-text" style={{color:"#753422 "}}>Great service and rates is best.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
              <div className="card d-none d-md-block">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title" style={{color:"#FFEBC9"}}>Asjid Iftekhar</h5>
                  <p className="card-text" style={{color:"#753422 "}}>For quality products and best discounts for all..if discounted items it's not mean poor quality.Great job.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cardswrapper">
              <div className="card">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title" style={{color:"#FFEBC9"}}>Card title</h5>
                  <p className="card-text" style={{color:"#753422 "}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
              <div className="card d-none d-md-block">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title" style={{color:"#FFEBC9"}}>Card title</h5>
                  <p className="card-text" style={{color:"#753422 "}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
              <div className="card d-none d-md-block">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title" style={{color:"#FFEBC9"}}>Card title</h5>
                  <p className="card-text" style={{color:"#753422 "}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" style={{backgroundColor:"#bd7f7f", marginTop: "160px"}} href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next"style={{backgroundColor:"#bd7f7f", marginTop: "160px"}} href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only"></span>
        </a>
      </div>
    </div>
  )
}
