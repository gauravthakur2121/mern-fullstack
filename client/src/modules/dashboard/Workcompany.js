import React from "react";
import Marquee from "react-fast-marquee";
import { SiAmazonmusic } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { SiWalmart } from "react-icons/si";
import { SiAppletv } from "react-icons/si";
import { SiPhonepe } from "react-icons/si";
import { SiPaytm } from "react-icons/si";
import { SiHcl } from "react-icons/si";
import { SiOyo } from "react-icons/si";
import { SiUber } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { SiFacebooklive } from "react-icons/si";
import PlacedStudents from "./Placedstudent";

const Workscompany = () => {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <h2 className="myheading-1">Our Alumini Work in Top Companies</h2>
          </div>
        </div>
      </div>
      <Marquee speed={110} gradient={true} pauseOnHover={true} delay={2}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-2 mt-4">
              <div className="mycard">
                <span className="icons-com">
                  <SiAmazonmusic></SiAmazonmusic>
                </span>
              </div>
            </div>

            <div className="col-md-2 mt-4">
              <div className="mycard">
                <span className="icons-com">
                  <FaGoogle></FaGoogle>
                </span>
              </div>
            </div>

            <div className="col-md-2 mt-4">
              <div className="mycard">
                <span className="icons-com">
                  <FaMicrosoft></FaMicrosoft>
                </span>
              </div>
            </div>

            <div className="col-md-2 mt-4">
              <div className="mycard">
                <span className="icons-com">
                  <SiWalmart></SiWalmart>
                </span>
              </div>
            </div>

            <div className="col-md-2 mt-4">
              <div className="mycard">
                <span className="icons-com">
                  <SiAppletv></SiAppletv>
                </span>
              </div>
            </div>

            <div className="col-md-2 mt-4">
              <div className="mycard">
                <span className="icons-com">
                  <SiHcl></SiHcl>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Marquee>

      <Marquee
        speed={110}
        gradient={true}
        pauseOnHover={true}
        delay={2}
        width="90%"
        direction="right"
      >
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-2 mt-4">
              <div className="mycard">
                <span className="icons-com">
                  <SiPhonepe></SiPhonepe>
                </span>
              </div>
            </div>

            <div className="col-md-2 mt-4">
              <div className="mycard">
                <span className="icons-com">
                  <SiPaytm></SiPaytm>
                </span>
              </div>
            </div>

            <div className="col-md-2 mt-4">
              <div className="mycard">
                <span className="icons-com">
                  <SiOyo></SiOyo>
                </span>
              </div>
            </div>

            <div className="col-md-2 mt-4">
              <div className="mycard">
                <span className="icons-com">
                  <SiUber></SiUber>
                </span>
              </div>
            </div>

            <div className="col-md-2 mt-4">
              <div className="mycard">
                <span className="icons-com">
                  <RiNetflixFill></RiNetflixFill>
                </span>
              </div>
            </div>

            <div className="col-md-2 mt-4">
              <div className="mycard">
                <span className="icons-com">
                  <SiFacebooklive></SiFacebooklive>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
        <PlacedStudents></PlacedStudents>
        
        

    </div>
  );
};

export default Workscompany;
