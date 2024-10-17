import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import Myapi from '../dashboard/Myapi';
import { MdEmail } from "react-icons/md";
import { MdWifiPassword } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { SiCoursera } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';

function Myregistrpage() {
    const navigat = useNavigate();
    const [showpass , setShowPass] = useState("password")

    const {register , handleSubmit , formState:{errors}} = useForm();

    const [user,setuser]=useState({
        emailid:"",
        name:"",
        course:"",
        dob:"",
        phoneno:"",
        pass:""
    });

    const showhide = ()=>{
        if(showpass==="password"){
            setShowPass("text")
        }
        else{
            setShowPass("password")
        }
        
    }

    const  updateuseer = (e)=>{
    
        const {name,value} = e.target;
        setuser((a)=>{
          return{
            ...a,
            [name]:value
          }
        })
    }


    const mysubmitdata = async()=>{
        const { emailid,name,phoneno,course,dob,pass} = user;
        if(user.emailid==="" || user.name==="" || user.pass==="")
        {
            alert("your form is invalid");
        }
        else
        {
        const res = await fetch(`${Myapi}/registoruser`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                emailid,name,phoneno,course,dob,pass
            })
            
        });
        const data = await res.json();
        toast.success("Register Succesfully" , {theme:"dark"})
        setTimeout(() => {
            navigat("/");
             }, 2000);
       
    }
        
    }




  return (
    <form>
    <div className='container mt-5'>
        <ToastContainer/>
    <div className='row justify-content-center'>
        <div className='col-md-8 p-3 rounded shadow'>
            <div className='container-fluid c-res'>
                <div className='row'>
                <div className='col-12 text-center'>
                        <div className="mb-3">
                          <p className='h2'>Welcome to Registor Page</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label"> <MdEmail/> Email address</label>
                            <input type="email" className="form-control" name='emailid' value={user.emailid} onInput={updateuseer}
                        {...register("emailid", { required: "Email is required"})}
                        />
                        {errors.emailid && <span className="text-danger">{errors.emailid.message}</span>}
                           
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label"> < IoPerson/> FullName</label>
                            <input type="text" className="form-control" name='name' value={user.name} onInput={updateuseer}
                            {...register("name" , {required:"Fullname is required"})}
                            />
                            {errors.fullname && <span className='text-danger'>{errors.fullname.message}</span>}
                           
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label"> <FaPhoneAlt/> Phone No</label>
                            <input type="text" className="form-control" name='phoneno' value={user.phoneno} onInput={updateuseer}
                           {...register("phoneno", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^\d{10}$/,
                                message: "Phone number must be 10 digits"
                            }
                        })}
                    />
                            {errors.phoneno && <span className='text-danger'>{errors.phoneno.message}</span>}
                            
                            
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label"> <CgCalendarDates/> DOB</label>
                            <input type="date" className="form-control" name='dob' value={user.dob} onInput={updateuseer}
                            {...register("dob" , {required: "DOB is required"})}
                            />
                            {errors.dob && <span className='text-danger'>{errors.dob.message}</span>}
                            
                            
                            
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label"> <SiCoursera/> Course</label>
                            <select className='form-select' name='course' value={user.course} onChange={updateuseer}>
                            <option>mern</option>
                            <option>mean</option>
                            <option>java</option>
                           </select>
                          
                          
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                        <label className="form-label tblock"> <MdWifiPassword/> Password</label>
                            <input type={showpass} className="form-control cpa" name='pass' value={user.pass} onInput={updateuseer}
                            {...register("pass", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters long"
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                                    message: "Password must include uppercase, lowercase, number, and special character"
                                }
                            })}
                            />
                            
                            
                            <button type='button' className='btn showhide bg-primary text-white ms-2' onClick={showhide}>{showpass==="password"? < FaRegEye/> :<FaEyeSlash/> }</button>

                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div className="mb-3">
                           <button type="button" className='btn btn-success c-btn' onClick={handleSubmit(mysubmitdata)}>Registor Now</button>
                           <Link to="/" className="btn btn-success c-btn ms-3">login page</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</form>
  )
}

export default Myregistrpage