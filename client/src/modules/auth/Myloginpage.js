import React from 'react';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Myapi from '../dashboard/Myapi';
import { MdEmail } from "react-icons/md";
import { MdWifiPassword } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import Myheaderpage from '../shares/Myheaderpage';
import Footer from '../dashboard/Footer';
  // import { useSelector, useDispatch } from 'react-redux';
 // import { usershow } from '../Redux/Userslice';
  import { useUser } from '../shares/UserProvider';

function Myloginpage() {
    const navigat = useNavigate();
      // const username = useSelector((state) => state.usersdata.username)
     //const dispatch = useDispatch()
      const { setloginuser } = useUser(); 
    const [login,setLogin]=useState({
        emailid:"",
        pass:""
    });
    const [showpass , setShowPass] = useState("password")

    const showhide = ()=>{
        if(showpass==="password"){
            setShowPass("text")

        }
        else{
            setShowPass("password")
        }
    }

    const  loginuser = (e)=>{
        const {name,value} = e.target;
        setLogin((a)=>{
          return{
            ...a,
            [name]:value
          }
        })
    }

    const userlogin = async () => {
        const { emailid, pass } = login;
        if (login.emailid === "" || login.pass === "") {
            alert("Please fill in both email and password.");
        } else {
            const datares = await fetch(`${Myapi}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ emailid, pass })
            });
            const resdata = await datares.json();
    
            if (resdata.status === 220) {
                toast.success("Login successfully", { theme: "dark" });
                if (resdata.user) {
                    setloginuser({ name: resdata.user.name });
            
                    setTimeout(() => {
                        navigat(resdata.user.role === "admin" ? '/userdata' : '/dashboard');
                    }, 2000);
                }
            } else if (resdata.status === 620) {
                alert("User not found."); 
            } else if (resdata.status === 421) {
                alert("Email and password don't match.");
            }
        }
    };
    

  return (
    <>
    <Myheaderpage/>
    <div className='container-fluid c-res1 register-page'>
        <ToastContainer/>
    <div className='row justify-content-center'>
        <div className='col-md-5  p-3 rounded shadow'>
            <div className='container-fluid c-res con-res'>
                <div className='row'>
                <div className='col-12 text-center'>
                        <div class="mb-3">
                          <p className='h2 animated-title'>Welcome to Login page</p>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div class="mb-3">
                            <label class="form-label"><MdEmail /> Email address</label>
                            <input type="email" class="form-control"  name='emailid' value={login.emailid} onInput={loginuser}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div class="mb-3">
                            <label className="form-label tblock"> <MdWifiPassword/> Password</label>
                            <input type={showpass} className="form-control cpa" name='pass' value={login.pass}  onInput={loginuser}/>
                            <button type='button' className='btn showhide bg-primary text-white ms-2' onClick={showhide}>{showpass==="password"? < FaRegEye/> :<FaEyeSlash/> }</button>
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div class="mb-3">
                           <button className='button' type='button' onClick={userlogin}>login</button>
                           <button type="button" className="button ms-2">
  <Link to="/registor" className="text-white text-decoration-none">Register Now</Link>
                    </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<Footer/>
</>
  )
}

export default Myloginpage