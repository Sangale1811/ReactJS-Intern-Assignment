import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import logo from './logo.png';
import movie1 from './movie1.png';
import movie2 from './movie2.png';
import movie from './movie.png';
import Footer from './Footer';


function SampleMovie(){

  return(
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <img src={logo} alt="logo" style={{height:'40px',width:'65px',marginLeft:'10px',marginTop:'10px'}}/>
    <a className="navbar-brand" href="#">Movie Recommender</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" >Book Movie Ticket</a>
        </li>
        </ul>
      <form className="d-flex">
       
        <button className="btn btn-outline-success" type="submit" >Search </button>
      </form>
    </div>
  </div>
</nav>

<div className="card" >
  <img src={movie} className="card-img-top " height="100px" width="30%" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Movie Name</h5>
    <p className="card text-center bg-secendary mb-3 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Book a ticket</a>
    <a href="#" className="btn btn-primary" style={{marginLeft:"15px"}}>view Details</a>
  </div>
</div>


<div className="card" >
  <img src={movie} className="card-img-top" height="100px" width="30%" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Movie Name</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Book a ticket</a>
    <a href="#" className="btn btn-primary" style={{marginLeft:"15px"}}>view Details</a>
  </div>
</div>


<div className="card" >
  <img src={movie} className="card-img-top" height="100px" width="30%" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Movie Name</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Book a ticket</a>
    <a href="#" className="btn btn-primary" style={{marginLeft:"10px"}}>view Details</a>
  </div>
  </div>


{/* <div className="container">
  <div className="row">
    <div className="col-sm-4">
      <div className="card">
        <img src={movie2} className="card-img-top" alt="Image 1"/>
        <div className="card-body">
          <h5 className="card-title">The Offer</h5>
          <p className="card-text">"The Offer" is an upcoming American television miniseries that was announced in 2019. It is based on the behind-the-scenes making of the iconic 1972 film "The Godfather" and is set to explore the life of film producer Albert S.</p>
          <a href="#" className="btn btn-primary" style={{marginLeft:"15px"}}>view Details</a>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card">
        <img src={movie1} className="card-img-top" alt="Image 2"/>
        <div className="card-body">
          <h5 className="card-title">All Rise</h5>
          <p className="card-text">All Rise is a courthouse drama series that centers around the lives of judges, prosecutors, and public defenders in Los Angeles.</p>
          <a href="#" className="btn btn-primary" style={{marginLeft:"15px"}}>view Details</a>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card">
        <img src={movie} className="card-img-top" alt="Image 3"/>
        <div className="card-body">
          <h5 className="card-title">All Souls</h5>
          <p className="card-text">"All Souls" is a medical drama television series that revolves around the lives and work of doctors, nurses, and staff at a prestigious teaching hospital.</p>
          <a href="#" className="btn btn-primary" style={{marginLeft:"15px"}}>view Details</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div> */}
  <Footer />
{/* </div> */}
    </> 
  )
}
export default SampleMovie;







