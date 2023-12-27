import React from "react";
import "./navbr.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg  bg-body-tertiary navbarbg">
        <div class="container-fluid ">
         
          <img
                className="logoImg"
                  src="https://www.enoviq.com/uploads/2021/08/Final-Logo-Dark1.png"
                  alt=""
           />
        

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Master Setup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Entity
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Employee
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Expense
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Search
                </a>
              </li>
            </ul>

            <div className="topRight">
              <div className="link">
                <img
                  className="topImg"
                  src="https://st2.depositphotos.com/2501025/5406/i/450/depositphotos_54065895-stock-photo-hacker.jpg"
                  alt=""
                />
              </div>
            </div>

            
            <div >
              <button class="btn btn-secondary dropdown-toggle dropdownbtn">Hi! Mr. Sobhen Shaoo</button>
            </div>


          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
