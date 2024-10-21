import React from "react";
import {Link} from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () => {
  return (
    <footer className=" text-light pt-5 pb-4 myfootercolor ">
      <div className="container">
        <div className="row">
         
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">CodeSquadz</h5>
            <p className="myparagraph">
              CodeSquadz, a top-tier IT training institute based in Noida,
              ensures a bright future for both aspiring students & working
              professionals.
            </p>
          </div>

        
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Important Courses</h5>
            <ul className="list-unstyled myparagraph">
              <li>
                <Link href="#" className="text-light text-decoration-none">
                  Java Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light text-decoration-none">
                  Python Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light text-decoration-none">
                  Software Testing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light text-decoration-none">
                  ReactJS Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light text-decoration-none">
                  AngularJS Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light text-decoration-none">
                  MEAN Stack
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light text-decoration-none">
                  MERN Stack
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light text-decoration-none">
                  Digital Marketing Training
                </Link>
              </li>
            </ul>
          </div>

        
          <div className="col-md-4 mb-4 myparagraph">
            <h5 className="text-uppercase">Office Address</h5>
            <p>H 65, Sector 63, Block H Noida, Uttar Pradesh 201301</p>
            <p>
            <FaPhoneAlt></FaPhoneAlt>
              <a
                href="tel:+7879332211"
                className="text-light text-decoration-none" style={{marginLeft: "10px"}}
              >
                78-79-33-22-11
              </a>
            </p>
            <p>
              <PiWhatsappLogoThin></PiWhatsappLogoThin>
              <a
                href="tel:+919717279566"
                className="text-light text-decoration-none" style={{marginLeft: "10px"}}
              >
                +91-9717279566
              </a>
            </p>
            <p>
              <MdAttachEmail></MdAttachEmail>
              <a
                href="mailto:enquiry@codesquadz.com"
                className="text-light text-decoration-none" style={{marginLeft: "10px"}}
              >
                enquiry@codesquadz.com
              </a>
            </p>
            <div className="social-icons" style={{fontSize: "30px"}}>
              <Link href="#" className="text-light me-2">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link href="#" className="text-light me-2">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link href="#" className="text-light me-2">
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link href="#" className="text-light me-2">
                <i className="bi bi-youtube"></i>
              </Link>
              <Link href="#" className="text-light me-2">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link href="#" className="text-light">
                <i className="bi bi-pinterest"></i>
              </Link>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-4">
            <p>Copyright@ 2022 CodeSquadz. All
                <br></br> 
                Rights Reserved.</p>
          </div>
          <div className="col-md-5 text-md-end myparagraph" style={{listStyle: "none" , textDecoration: "none"}}>
            <Link href="#" className="text-light me-3" style={{listStyle: "none" , textDecoration: "none"}}>
              About Us
            </Link>
            <Link href="#" className="text-light me-3" style={{listStyle: "none" , textDecoration: "none"}}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-light me-3" style={{listStyle: "none" , textDecoration: "none"}}>
              Refund Policy
            </Link>
            <Link href="#" className="text-light" style={{listStyle: "none" , textDecoration: "none"}}>
              Terms & Conditions
            </Link>
          </div>

          <div className="col-md-3" style={{fontSize: "30px"}}>
            <FaFacebookF></FaFacebookF>
            <FaTwitter className="m-2"></FaTwitter>
            <FaYoutube className="m-2"></FaYoutube>
            <FaFacebookMessenger className="m-2"></FaFacebookMessenger>
            <FaInstagramSquare></FaInstagramSquare>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
