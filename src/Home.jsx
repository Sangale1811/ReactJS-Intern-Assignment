import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import logo from './logo.png';
import movie1 from './movie1.png';
import movie2 from './movie2.png';
import movie from './movie.png';
import Footer from './Footer';
import Search from './Search';
import {  Link } from 'react-router-dom';

const Home=()=>{

  return(
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <img  src={logo} alt="logo" style={{height:'40px',width:'65px',marginLeft:'10px',marginTop:'10px',cursor:'pointer'}}/>
    <a className="navbar-brand" href="#">Movie Recommender</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{marginLeft:'190px'}}>Home</a>
        </li>

        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#" >Book Movie Ticket</a> */}
          <Link to="/bookmovieticket"  type="submit" style={{marginLeft:"100px",marginTop:"7px",color:'blue'}}>Book Movie Ticket</Link>
        </li>
        </ul>
      <form className="d-flex">
        <Link to="/search" className="btn btn-outline-success" type="submit" style={{marginLeft:"290px"}}>Search </Link>
      </form>
    </div>
  </div>
</nav>

<div className="container" >
 <h1 className="recommend"> 📺 Sample Shows 📺</h1>
  <div className="row">
    <div className="col-sm-4">
      <div className="card">
        <img src={movie2} className="card-img-top" alt="Image 1"/>
        <div className="card-body">
          <h5 className="card-title">The Offer</h5>
          <p className="card-text">"The Offer" is an upcoming American television miniseries that was announced in 2019. nd is set to explore the life of film producer Albert S.</p>
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
          <a href="#" className="btn btn-primary" style={{marginLeft:"15px",marginTop:"50px"}}>view Details</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <Footer />
</div>

    </> 
  )
}
export default Home;







