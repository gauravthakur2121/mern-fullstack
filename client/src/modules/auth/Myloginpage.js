import React from 'react';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Myapi from '../dashboard/Myapi';
import { MdEmail } from "react-icons/md";
import { MdWifiPassword } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

function Myloginpage() {
    const navigat = useNavigate()
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

    const userlogin = async()=>{
        const {emailid , pass} = login
        if(login.emailid==="" || login.pass===""){
            alert("fill the emailid and password")
        }
        else{
            const datares = await fetch(`${Myapi}/login` , {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    emailid , pass
                })
            });
            const resdata =  await datares.json()
        console.log(resdata)
        
        if(resdata.status===220)
            {
                toast.success("Login succesfully ",{theme: "dark"});
                setTimeout(() => {
                    navigat('/dashboard');
                     }, 2000);
                
            }

            if(resdata.status===620)
            {
                alert("user not found");
            }

            if(resdata.status===421)
                {
                    alert("email and password don't match");
                }
        }

}

  return (
    <div className='container mt-5 c-res1'>
        <ToastContainer/>
    <div className='row justify-content-center'>
        <div className='col-md-5  p-3 rounded shadow'>
            <div className='container-fluid c-res'>
                <div className='row'>
                <div className='col-12 text-center'>
                        <div class="mb-3">
                          <p className='h2'>Welcome to Login page</p>
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
                           <button className='btn btn-success c-btn' type='button' onClick={userlogin}>login</button>
                           <Link to="registor" className="btn btn-success c-btn ms-3 ">Registor Now</Link>
                           <Link to="dashboard" className="btn btn-success dash-1 c-btn ms-3 ">dashboard</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Myloginpage