import React from 'react';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Myapi from '../dashboard/Myapi';

function Myloginpage() {
    const navigat = useNavigate()
    const [login,setLogin]=useState({
        emailid:"",
        pass:""
    });

    const  loginuser = (e)=>{
        console.log(e.target.value);
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
                alert("welcome to");
                navigat('/dashboard');
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
    <div className='container'>
    <div className='row justify-content-center'>
        <div className='col-md-5 bg-warning p-3 rounded shadow'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-12 text-center'>
                        <div class="mb-3">
                          <p className='h2'>Welcome to Login page</p>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control"  name='emailid' value={login.emailid} onInput={loginuser}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" name='pass' value={login.pass}  onInput={loginuser}/>
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div class="mb-3">
                           <button className='btn btn-success c-btn' type='button' onClick={userlogin}>login</button>
                           <Link to="registor" className="btn">Registor Now</Link>
                           <Link to="dashboard" className="btn">dashboard</Link>
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