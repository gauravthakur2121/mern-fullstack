import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Myapi from './Myapi';
import { FaRegEdit } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Userlogindata from '../shares/Userlogindata';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";
import Charts from './Charts';

function CustomTable() {
    const [user, setuser] = useState([]);
    const navigate = useNavigate();
    
    const getalldata = () => {
        axios.get(`${Myapi}/alldata`).then((d) => {
            setuser(d.data);
        });
    };

    useEffect(() => {
        getalldata();
    }, []);

    const deletedata = async (id) => {
        const confirmdelete =  window.confirm("Are you sure you want to delete this user data")
        if(confirmdelete){
        await axios.delete(`${Myapi}/deleterecord/${id}`).then(() => {
            getalldata();
        });
    }
};

// find the unique Data
const uniqueCourses = [...new Set(user.map((d) => d.course))];
const uniqueEmailid = [...new Set(user.map((d) => d.emailid))]
const totalName = [...new Set(user.map((d) => d.name))]

    return (
        <Fragment>
             
            <Userlogindata/>
            <div className="container">
            <div className="row">
                <div className="col-md-12">
      <button
  className="btn mt-3 fw-bold animated-button"
        onClick={() => navigate("/")}
      >
        <span className="text-white">
          <IoArrowBackCircle /> Go to Home
        </span>
      </button>
      </div>
      </div>
      </div>
           
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col mt-3'>
                    <div className="card mb-3 shadow bg-success text-white" style={{height:"95px"}}>
                <div className="card-body">
                    <span className="card-title h4">Total Student: </span>
                    <span className='h3 c-float'>{user.length}</span>
                </div>
            </div>

                    </div>
                    <div className='col mt-3'>
            <div className="card mb-3 shadow bg-warning text-white">
                <div className="card-body">
                    <span className="card-title h4">Total Course:</span>
                    <span className='h3 c-float'>{uniqueCourses.length}</span>
                </div>
            </div>
        </div>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-danger text-white">
                <div className="card-body">
                    <span className="card-title h4">Total Email:</span>
                    <span className='h3 c-float'>{uniqueEmailid.length}</span>
                </div>
            </div>
        </div>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-info text-white">
                <div className="card-body">
                    <span className="card-title h4">Total Name:</span>
                    <span className='h3 c-float'>{totalName.length}</span>
                </div>
            </div>
        </div>
                </div>
            </div>
            
            <div className="table-responsive">
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col">MongodbId</th>
                            <th scope="col">FullName</th>
                            <th scope="col">Email id</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Course</th>
                            <th scope="col" className='text-end'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((d) => (
                            <tr key={d._id}>
                                <th scope="row">{d._id}</th>
                                <td>{d.name}</td>
                                <td>{d.emailid}</td>
                                <td>{d.phoneno}</td>
                                <td>{d.dob}</td>
                                <td>{d.course}</td>
                                <td className='text-center h5'>
                                    <Link to={`edituser/${d._id}`} className="badge text-bg-primary">
                                        <FaRegEdit />
                                    </Link>
                                    <button className="btn badge text-bg-danger ms-2" onClick={() => deletedata(d._id)}>
                                        <MdDelete />
                                    </button>
                                    <Link to={`details/${d._id}`} className="badge text-bg-info ms-2">
                                        <FiEye />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Charts/>
        </Fragment>
    );
}

export default CustomTable;
