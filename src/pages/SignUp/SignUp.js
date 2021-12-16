import React from "react";
import "../LoginPage/Login.scss";
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='login d-flex flex-column row col'>
      <div className='logo d-flex flex-row justify-content-center align-items-center'>
        <img
          src='/assets/imagees/svg/logo.svg'
          alt=''
          style={{
            width: "6rem",
          }}
        />
      </div>
      <div className='main-login'>
        <div className='login-sub '>
          <div className='login-intro'>
            <h1 className='fs-5 fw-bold'>Sign Up</h1>
            <p
              style={{
                marginBottom: "0",
              }}
            >
              Your account to pay your dues with ease.
            </p>
          </div>
          <div className='form'>
            <form>
              <div className='first-inp d-flex justify-content-start align-items-center'>

                <img
                  className='px-2 d-flex img'
                  src='/assets/images/svg/profile.svg'
                  alt=''
                  style={{
                    marginTop: "2rem",
                    position: "absolute",
                    left: "10px",
                  }}
                />
                <input type='text' placeholder='Matric Number' className='ps-5 d-inline-block' />
              </div>
              <div className='first-inp d-flex justify-content-start align-items-center'>
                <img
                  className='px-2 d-flex img'
                  src='/assets/images/svg/vector-1.svg'
                  alt=''
                  style={{
                    marginTop: "2rem",
                    position: 'absolute',
                    left: "10px",
                  }}
                />
                <input type='password' placeholder='password' className='ps-5 d-inline-block' />
                <div
                  className='img'
                  style={{
                    position: "absolute",
                    right: "10px",
                  }}
                >
                  <img
                    className='px-2 d-flex '
                    src='/assets/images/svg/color.svg'
                    alt=''
                    style={{
                      marginTop: "2rem",
                      right: "-10px",
                    }}
                  />
                </div>
              </div>
              <button type='submit' className='button'>
                Signup
              </button>
            </form>
            <div className='support d-flex justify-content-center align-items-center'>
              <p>
                old user? <Link to='/login'>login</Link>
              </p>
            </div>
          </div>
        </div>
        <div className='terms'>
          <p>
            By logging in, you accept the <span>Terms And Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
