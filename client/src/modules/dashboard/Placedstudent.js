import React from "react";
import developer from "../images/developer1.jpg";
import gaurav from "../images/gaurav.jpeg";
import yogesh from "../images/PHOTO.jpeg";
import brijesh from "../images/developer-5.jpg";
import Marquee from "react-fast-marquee";

const students = [
  {
    name: "Anubhav",
    company: "Cost 2 Action",
    position: "Frontent Engineer",
    img: developer,
  },
  {
    name: "Gaurav Shishodia",
    company: "Sinior Developer",
    position: "Mern Stack Developer",
    img: gaurav,
  },
  {
    name: "Yogesh Nagar",
    company: "TechCompiler",
    position: "Backend Developer",
    img: yogesh,
  },
  {
    name: "Brijesh Kumar",
    company: "TechCompiler",
    position: "Software Engineer",
    img: brijesh,
  },
];

const PlacedStudents = () => {
  return (
    
    <div className="container text-center my-5">
    <h2 className="mb-4">Placed Students</h2>
    <Marquee behavior="scroll" direction="left" delay={2} >
        <div className="d-flex">
            {students.map((student, index) => (
                <div key={index} className="card m-3 p-3 position-relative" style={{ width: '18rem' }}>
                    <div className="quote-icon position-absolute" style={{ top: '-15px', left: '-15px', fontSize: '2rem' }}>“</div>
                    <img src={student.img} alt={student.name} className="rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px' }} />
                    <h5>{student.name}</h5>
                    <p className="mb-1">{student.company}</p>
                    <p className="text-muted">{student.position}</p>
                    <div className="quote-icon position-absolute" style={{ bottom: '-15px', right: '-15px', fontSize: '2rem' }}>”</div>
                </div>
            ))}
        </div>
    </Marquee>
</div>
   
  );
};

export default PlacedStudents;
