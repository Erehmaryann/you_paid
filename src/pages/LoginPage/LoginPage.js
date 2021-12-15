import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className='login d-flex flex-column  pt-5'>
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
            <h1 className='fs-5 fw-bold'>Login</h1>
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
                <div
                  className='img'
                  style={{
                    position: "absolute",
                  }}
                >
                  <img
                    className='px-2 d-flex '
                    src='/assets/images/svg/vector1.svg'
                    alt=''
                    style={{
                      marginTop: "2rem",
                      left: "10px",
                    }}
                  />
                </div>

                <input type='text' placeholder='Matric Number' />
              </div>
              <div className='first-inp d-flex justify-content-start align-items-center'>
                <div
                  className='img '
                  style={{
                    position: "absolute",
                  }}
                >
                  <img
                    className='px-2 d-flex'
                    src='/assets/images/svg/vector-1.svg'
                    alt=''
                    style={{
                      marginTop: "2rem",
                      left: "10px",
                    }}
                  />
                </div>
                <input type='password' placeholder='password' />
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
                LogIn
              </button>
            </form>
            <div className='support d-flex justify-content-center align-items-center'>
              <p>
                new user? <Link to='/signup'>Sign up</Link>
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

export default LoginPage;
