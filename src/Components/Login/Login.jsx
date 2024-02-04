import React from 'react'
import './Login.css' 
import '../../App.css'
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className="container flex">
        
        <div className="videoDiv">
<<<<<<< HEAD
          <video autoPlay muted  src={video} ></video>
=======
          <video src={video} autoPlay muted loop></video>
>>>>>>> arunalu-origin/main

          <div className="textDiv">
          </div>
          <div className='footerDiv flex'>
            <span className='text'>Don't have an account?</span>
            <Link to={'/register'}>
              <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>
  
        <div className="formDiv flex">
          <div className="headerDiv">
<<<<<<< HEAD
           <img src={logo} alt='logo'className='mx-auto' />
=======
            <img src={logo} alt='logo' />
>>>>>>> arunalu-origin/main
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className='form grid'>
           {/* <span className='showMessage'>Login Status will go here</span>*/}
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon'></FaUserShield>
                <input type="text" id='username' placeholder='Enter username' />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input type='password' id='Password' placeholder='Enter Password' />
              </div>
            </div>
            <button type='submit' className='btn flex'>
              <span>Login</span>
              <AiOutlineSwapRight className='icon' />
            </button>

<<<<<<< HEAD
            <Link to={'/Verify'}>
            <span className='forgotPassword'>
              Forgot your Password? <a href=''>Click Here</a>
            </span>
            </Link> 
            
           
=======
            <span className='forgotPassword'>
              Forgot your Password? <a href=''>Click Here</a>
            </span>
>>>>>>> arunalu-origin/main

          </form>
        </div>

      </div>
    </div>
  )
}

<<<<<<< HEAD
export default Login 

// autoPlay muted loop this video loop
=======
export default Login
>>>>>>> arunalu-origin/main
