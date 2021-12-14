import React from "react";
import BackgroundImage from "./assets/background.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import icon from "./assets/Vector.svg";
import icon1 from "./assets/Vector1.svg";
import "./HomePage.scss";
function HomePage() {
  return (
    <div className='homepage '>
      <div
        className='background-image'
        style={{
          background: `linear-gradient(to bottom, rgba(10, 130, 180, 0.45), rgba(10, 130, 180, 0.45)),
          url(${BackgroundImage})`,
        }}
      ></div>
      <div className='other'>
        <div className='header-section d-flex flex-row justify-content-between align-items-center '>
          <div className='logo'>
            <Logo
              style={{
                width: "6rem",
              }}
            />
          </div>
          <div>
            <button className='header-button btn btn-lg border border-1 rounded-2 fs-5 fw-bold d-flex justify-content-center align-items-center '>
              Log In
            </button>
          </div>
        </div>
        <div className='mid-section  fs-1  fw-bolder'>
          <p>
            payment of your departmental, faculty and other association has been
            easy and convinient. No need to queue anymore.
            <span
              style={{
                color: "#2D75A7",
                fontSize: "11px",
              }}
            >
              READ MORE
            </span>
          </p>
        </div>
        <div className='footer d-md-flex justify-content-around align-items-center'>
          <div className='footer-left d-md-flex  justify-content-center align-items-center px-5 border-end'>
            <img
              className='icon1'
              src={`${icon1}`}
              alt=''
              style={{
                width: "8rem",
                paddingRight: "6%",
              }}
            />

            <p className='first-paragraph '>
              In order to adhere to covid-19 guidelines and best practices, the
              school management has decided that dues shouldn't be paid
              physically anymore.
            </p>
          </div>
          <div
            className='footer-rignt  d-md-flex justify-content-around align-items-center px-5'
            style={{
              paddingLeft: " 10%",
            }}
          >
            <img
              className='icon1'
              src={`${icon}`}
              alt=''
              style={{
                width: "3rem",
              }}
            />

            <p className='first-paragraph text-wrap'>
              With youPaid, you can easily make payments, keep track of your
              receipt and transaction history{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
