import React from "react";
import Logo from "./assets/logo.svg";
import "./Login.scss";
import vector from "./assets/Vector.svg";
import vector1 from "./assets/Vector-1.svg";
import vector2 from "./assets/Color.svg";

function LoginPage() {
  return (
    <div className='login d-flex flex-column  pt-5'>
      <div className='logo d-flex flex-row justify-content-center align-items-center'>
        <img
          src={`${Logo}`}
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
                    src={`${vector}`}
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
                    src={`${vector1}`}
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
                    src={`${vector2}`}
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
                Unable to login? <span>contact support</span>
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
