import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Myapi from './Myapi';
import { FaRegEdit } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Userlogindata from '../shares/Userlogindata';

function CustomTable() {
    const [user, setuser] = useState([]);
    
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

    return (
        <Fragment>
            <Userlogindata/>
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
        </Fragment>
    );
}

export default CustomTable;
