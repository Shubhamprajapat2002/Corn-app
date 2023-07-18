import React from "react";
import image from '../images/1 4.png'
const Navbar = () => {
  return (
    <>
      <div className="topnav">
        <p className="topnav-text fs-6 py-1">DELISH POPCORN STANDS WITH</p>
      </div>
      {/* <div className="container-fluid">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid row">
          <div className=" col-md-4">
        <img className="img" src={image} alt="" />
          </div>
               
          <div className="collapse navbar-collapse col-md-8"  id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto  ">
              <li className="nav-item">
                <a className="nav-link nav-text mx-2" aria-current="page" href="/">
                VIRTUAL FUNDRAISING
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text mx-2" href="/">
                BROCHURE FUNDRAISING
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text mx-2" href="/">
                SHOP POPCORN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text mx-2" href="/">
                ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text-yellow mx-2" href="/">
                SIGN IN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
                    </div> */}

<nav className="navbar navbar-expand-lg  ">
  <div className="container navv">
   <img className="imglogo navbar-brand" src={image} alt="" />
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-5 navedit "  id="navbarText">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link nav-text mx-2  " aria-current="page" href="/"> VIRTUAL FUNDRAISING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text mx-2" href="/">    BROCHURE FUNDRAISING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text mx-2" href="/">SHOP POPCORN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text mx-2" href="/"> ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-text-yellow mx-2" href="/"> SIGN IN</a>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
