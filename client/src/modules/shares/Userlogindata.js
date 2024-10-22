import React from 'react';
import { useUser } from './UserProvider';
import { VscAccount } from "react-icons/vsc";

function Userlogindata() {
    const { loginuser } = useUser();

    return (
        <div className='container-fluid userlg'>
            <div className='row'>
                <div className='col-md-12 mt-1 text-center login-userdata'>   
                    {loginuser ? (
                        <h1 className='welcome-message animated'> <VscAccount/> Welcome to {loginuser.name}</h1>
                    ) : (
                        <h1 className='welcome-message animated'>Please log in.</h1>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Userlogindata;
