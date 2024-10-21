import React,{useState,useEffect, Fragment} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Myapi from './Myapi';
import Userlogindata from '../shares/Userlogindata';

function CustomTable() {
    const [user, setuser] = useState([])
    const getalldata = () => {
        axios.get(`${Myapi}/alldata`).then((d) => {
            
            setuser(d.data);
        });
    }

    useEffect(() => {
        getalldata();
    }, [])


const deletedata = async(id)=>
{
    await axios.delete(`${Myapi}/deleterecord/${id}`).then((d)=>{
        
        getalldata();
    })
}



    return (
        <Fragment>
        <Userlogindata/>
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
                {user.map((d) => {
                    return (
                        <tr>
                            <th scope="row">{d._id}</th>
                            <td>{d.name}</td>
                            <td>{d.emailid}</td>
                            <td>{d.phoneno}</td>
                            <td>{d.dob}</td>
                            <td>{d.course}</td>
                            <td className='text-end'>
                                <Link to={`edituser/`+d._id} className="badge text-bg-primary">Edit</Link>
                                <button  className="btn badge text-bg-danger" onClick={()=>deletedata(d._id)}>Del</button>
                                <Link to={'details/'+d._id} className="badge text-bg-info" >View</Link>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
        </Fragment>

    )
}

export default CustomTable