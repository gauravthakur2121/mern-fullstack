import React from "react";
import img from "../images/tanay-sirr.png";
import img2 from "../images/manish-bhatia-sir.png";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { RiAngularjsFill } from "react-icons/ri";
import { FaRust } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiCyberdefenders } from "react-icons/si";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";

const ImageList = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7">
            <h1 className="myheading2">
              "Shape a Promising Carrier with the new-age IT Skill"
            </h1>
            <p className="mt-5">
              Tanay Kishor Mishra has an experince of over 25 years in teaching
              modern technology to student. He can make his students ready to
              meet the challenges in their IT carreeris At Codesqudes , He is
              Sr. AI Counsltant who can motivate students to ensure a bright
              future.
            </p>
            <p className="mt-5">__ Tanay Kishor Mishra, Codesquadz</p>
          </div>
          <div className="col-md-5">
            <img src={img} alt="tanay" className="img-fluid"></img>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-5">
            <img src={img2} alt="tanay" className="img-fluid"></img>
          </div>

          <div className="col-md-7">
            <h1 className="myheading2">
              "Shape a Promising Carrier with the new-age IT Skill"
            </h1>
            <p className="mt-5">
              Manish Bhatia sir has an experince of over 20+ years in teaching
              modern technology to student. He can make his students ready to
              meet the challenges in their IT carreeris At Codesqudes , He is
              Sr. AI Counsltant who can motivate students to ensure a bright
              future.
            </p>
            <p className="mt-5">__ Manish Bhatia sir, Codesquadz</p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="myheading2 text-center">
              Advance IT Training by Industry Expert
            </h1>
            <p className="mt-2 text-center">
              Codesquadz Provides Carier Oriented IT Traning on live projects
              from Industry Expert to level up your IT carier <br></br>
              through new age tech-skills
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-2">
            <div className="mycontainer">
              <h1 className="my-icons">
                {" "}
                <FaJava></FaJava>
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                Java
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="mycontainer">
              <h1 className="my-icons">
                {" "}
                <FaPython></FaPython>
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                Python
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="mycontainer">
              <h1 className="my-icons">
                {" "}
                <RiReactjsFill></RiReactjsFill>
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                React Js
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="mycontainer">
              <h1 className="my-icons">
                {" "}
                <FaDatabase></FaDatabase>
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                DataBase
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="mycontainer">
              <h1 className="my-icons">
                {" "}
                <FaAws></FaAws>
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                Aws/Cloud Coputing
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="mycontainer">
              <h1 className="my-icons">
                {" "}
                <RiAngularjsFill></RiAngularjsFill>
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                Angular
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="mycontainer">
              <h1 className="my-icons">
                {" "}
                <FaRust></FaRust>
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                Rust
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="mycontainer">
              <h1 className="my-icons">
                {" "}
                <BsFiletypeSql></BsFiletypeSql>
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                SQL/MySql
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="mycontainer">
              <h1 className="my-icons">
                {" "}
                <SiCyberdefenders></SiCyberdefenders>
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                Cyber/Security
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="mycontainer">
              <h1 className="my-icons">
                <AiFillApple></AiFillApple>
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                Ios Development
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="mycontainer">
              <h1 className="my-icons">
                {" "}
                <AiFillAndroid></AiFillAndroid>
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                Android Development
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="mycontainer">
              <h1 className="my-icons">
                {" "}
                <DiMongodb></DiMongodb>
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                MongoDb/Database
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <p className="mypragraph-3">
              CodeSquadz has served more than a decade in educational industry,
              now our aim is to elevate the career of programming aspirants. We
              are willing to train coding aspirants to become professionals with
              12+ years of experience in educational training in programming and
              eLearning software development services. Students from IIMT
              UNIVERSITY had an important industrial visit arranged by
              CodeSquadz, which gave them an understanding of the internal
              processes of… Enroll in CodeSquadz to experience the ultimate JAVA
              Training Program! Our new Java Training Batch 2024 begins on May
              20th, 2024, from 05:00 PM to…
            </p>
            <ul className="mt-3 mypragraph-3">
              <li>
                CodeSquadz is an outstanding educational institute committed to
                providing Education Towards We offer various professional
                courses in the IT field to kick-start the careers of our
                students. Here, we provide quality education to impart all
                relevant concepts to students.
              </li>
              <li className="mt-3">
                CodeSquadz is an outstanding educational institute committed to
                providing Education Towards We offer various professional
                courses in the IT field to kick-start the careers of our
                students. Here, we provide quality education to impart all
                relevant concepts to students.
              </li>
              <li className="mt-3 mb-3">
                CodeSquadz is an outstanding educational institute committed to
                providing Education Towards We offer various professional
                courses in the IT field to kick-start the careers of our
                students. Here, we provide quality education to impart all
                relevant concepts to students.
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ImageList;
