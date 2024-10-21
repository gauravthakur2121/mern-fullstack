import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Myapi from './Myapi';


function Userdetailspage() {
    const {id} = useParams();

    const [userdetail,userset]=useState({})

const singleuser= ()=>{
    axios.get(`${Myapi}/singleuser/${id}`).then((d)=>{
        userset(d.data);
    })

}

useEffect(()=>{
    singleuser();
},[]);

  return (
    
<div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='text-center f-bold mb-4'>User Details Page</h2>
          </div>
          <div className='col-md-12'>
            {userdetail ? (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Sno</th>
                    <th scope="col">Name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Emailid</th>
                    <th scope="col">Age</th>
                    <th scope="col">Phoneno</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{userdetail._id}</th>
                    <td>{userdetail.sno}</td>
                    <td>{userdetail.name}</td>
                    <td>{userdetail.course}</td>
                    <td>{userdetail.emailid}</td>
                    <td>{userdetail.age}</td>
                    <td>{userdetail.phoneno}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>Loading user details...</p>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Userdetailspage