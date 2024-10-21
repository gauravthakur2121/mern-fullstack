import React from 'react';
import { MdMarkEmailRead } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <div className='container-fluid mt-4 contact-contant mb-3'>
            <div className='row'>
                <div className='container mb-3'>
                    <div className='row'>
                <div className='col-md-6 text-center'>
                    <h2 className='myheading-1 mt-3 text-center'>Connect with Us</h2>
                    <p className='myparagraph-3'>The Company HR can contact our Placement head to discuss potential hiring
                        for various positions in the IT industry.
                    </p>
                    <button className='btn btn-danger text-center' style={{fontSize: "14px"}}>Know more</button>
                </div>

                <div className='col-md-3'>
                <h2 className='myheading-1 mt-3 text-center'>Get in touch</h2>
               <h1 className='h1 text-center'><MdMarkEmailRead></MdMarkEmailRead></h1>
               <p className='myparagraph-3 text-primary text-center'>swati.paul@codesqudz.com</p>
                    
                    </div>

                    <div className='col-md-3'>
                    <h2 className='myheading-1 mt-3 text-center'>WhatsApp</h2>
                    <h1 className='h1 text-center'><FaWhatsapp></FaWhatsapp></h1>
                    <p className='myparagraph-3 text-primary text-center'>+91 9389390240</p>
 
                    </div>
            </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
