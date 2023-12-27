import React from "react";
import "./home.css";
import "./announcement.css";
import "./anniversary.css";
import "./birthday.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div class="row">
          <div class="col-6">
            <div className="container">
              <div class="row">
                <div class="col">
                  <div class="card card-1">
                    <div class="text-center">
                      <h5 class="card-text">Total leave request</h5>
                      <p className="card-number">0</p>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card card-2">
                    <div class="text-center">
                      <h5 class="card-text">Total leave request</h5>
                      <p className="card-number">0</p>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card card-3">
                    <div class="text-center">
                      <h5 class="card-text">Total leave request</h5>
                      <p className="card-number">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Announcement section Start */}
            <div className="container">
              <div class="row">
                <div className="col-announcement">
                  <div class="announcement">
                    <h5 className="announcement-heading text-center">
                      {" "}
                      <i class="fa fa-bullhorn icon"></i>IMPORTANT ANNOUNCEMENT
                    </h5>
                    <p>Test Announcement</p>
                    <hr />
                    <p>Test Announcement</p>
                    <hr />
                    <p>Test Announcement</p>
                    <hr />
                    <p>Test Announcement</p>
                    <hr />
                    <p>Test Announcement</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Announcement section End */}

            {/* Anniversary section Starts */}
            <div className="container">
              <div class="row">
                <div className="col-anniversary">
                  <div className="anniv-box-shadow announcement-2">
                    <ul class="list-group ">
                      <li class="list-group-item  text-center anniversary-heading">
                        JOINING ANNIVERSARY'S OF THE MONTH
                      </li>
                    </ul>

                    <div class="container text-center ">
                      <div class="row row-cols-4 date-col ">
                        <div class="col date-box">
                          <span>
                            <b>'01-Dec'</b>
                          </span>
                          <p>'Saurabh Chavan'</p>
                        </div>
                        <div class="col date-box">
                          <span>
                            <b>'07-Dec'</b>
                          </span>
                          <p>'Sunny Kadam'</p>
                        </div>
                        <div class="col date-box">
                          <span>
                            <b>'12-Dec'</b>
                          </span>
                          <p>'Siddhesh Dhuri'</p>
                        </div>
                        <div class="col date-box">
                          <span>
                            <b>'12-Dec'</b>
                          </span>
                          <p>'Akhilesh chavan'</p>
                        </div>
                        <div class="col date-box">
                          <span>
                            <b>'17-Dec'</b>
                          </span>
                          <p>'Vikas Nishad'</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Anniversary section Ends */}
          </div>

          {/*  /// section-2  ///  */}

          <div class="col-6">
            <div className="container">
              <div class="row row-cols-2">

                {/* Attendence Section Starts */}
                <div class="col-attendence">
                  <div className=" attendence-box-shadow">
                    <div className="attendence-body">
                      <ul class="list-group ">
                        <li class="list-group-item  text-center attendence-heading">
                        <i class="fa-regular fa-calendar-check"></i>  ATTENDENCE
                        </li>
                      </ul>
                      <button className="btn btn-primary attendence-btn">Calen.. view</button>
                      <hr />
                      <p><b>Check-in</b> <i class="fa-solid fa-toggle-off fa-2x toggle-icon"></i></p>
                      <hr />
                      <p><b>Lunch Sta</b> <i class="fa-solid fa-toggle-off fa-2x  toggle-icon"></i></p>

                      <hr />
                      <p><b>Lunch End</b> <i class="fa-solid fa-toggle-off fa-2x toggle-icon"></i></p>

                      <hr />
                      <p><b>Check Out</b> <i class="fa-solid fa-toggle-off fa-2x toggle-icon"></i></p>

                    </div>
                  </div>
                </div>

                  {/* Attendence Section Ends */}

                  {/* /// Profile Section Starts */}

                <div class="col-profile">
                  <div className=" profile-box-shadow text-center">
                    <div className="profile-content">
                      <div className="img-div">
                      <img
                        className="profile-img-circle"
                        src="https://e1.pxfuel.com/desktop-wallpaper/414/45/desktop-wallpaper-1920x1080-anonymus-hacker-in-mask-pointing-finger-laptop-full-srv-android.jpg"
                        alt=""
                      />

                       <div className="upload-img"><i class="fa-solid fa-camera "></i></div>
                      
              

                      </div>
                     
                      <h4>Mr.Sobhen Sahoo</h4>
                      <p>Employee Code : EN50077</p>
                      <hr />
                      <p>Designation : S/w Developer</p>
                    </div>
                  </div>
                </div>



              </div>
            </div>

               {/* /// Profile Section Ends */}

            {/* Birthday section Starts */}

            <div className="container">
              <div class="row">
                <div className="col-birthday">
                  <div className="birthday-box-shadow birthday-2">
                    <ul class="list-group ">
                      <li class="list-group-item  text-center birthday-heading">
                        BIRTHDAY'S OF THE MONTH
                      </li>
                    </ul>

                    <div class="container text-center ">
                      <div class="row row-cols-4 date-col">
                        <div class="col date-box-2">
                          <span>
                            <b>'Tushar Vispute'</b>
                          </span>
                          <p>
                            <b>'05-Dec'</b>
                          </p>
                        </div>
                        <div class="col date-box-2">
                          <span>
                            <b>'Nabil Shaik'</b>
                          </span>
                          <p>
                            <b>'06-Dec'</b>
                          </p>
                        </div>
                        <div class="col date-box-2">
                          <span>
                            <b>'Satyam Nigam'</b>
                          </span>
                          <p>
                            <b>'10-Dec'</b>
                          </p>
                        </div>
                        <div class="col date-box-2">
                          <span>
                            <b>'Amar Bawaskar'</b>
                          </span>
                          <p>
                            <b>'11-Dec'</b>
                          </p>
                        </div>
                        <div class="col date-box-2">
                          <span>
                            <b>'Vikas Nishad'</b>
                          </span>
                          <p>
                            <b>'11-Dec'</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Birthday section Ends */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
