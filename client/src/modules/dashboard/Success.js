import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaWindows } from "react-icons/fa";
import img4 from "../images/codesquadz-app.png"

const Success = () => {
  return (
    <div>
      <div>
        <div className="container mt-5 mb-4">
          <h3 className="mb-4">Success Stories</h3>
          <Carousel>
            <Carousel.Item>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      width="495"
                      height="275"
                      src="https://www.youtube.com/embed/myTjpTW_oDs"
                      title="Genuine Reviews From Our Students || Success Story || Internship &amp; Placement"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                  <p>
                    It is a wonderful experience for me to turn from a student
                    to an IT professional. This all started when I joined the 6
                    months internship program under the guidance of Manish
                    Bhatia sir. He is simply a genius teacher providing valuable
                    information to all aspiring students. That was a great
                    decision for me to enroll in the special 6-months internship
                    program of CodeSquadz. This IT training institute is truly a
                    temple to learn JAVA and become proficient. The learnings I
                    got here will help me to grow my career.
                  </p>
                  <p>
                    <strong>- Alok Kumar Chaudhary (IDEMIA SYSCOM)</strong>
                  </p>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      width="495"
                      height="275"
                      src="https://www.youtube.com/embed/cvqQLvZyCF4"
                      title="Placed in TCS || Placed Student Reviews || Learn Java By Manish Bhatia || CodeSquadz"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                  <p>
                    It is a wonderful experience for me to turn from a student
                    to an IT professional. This all started when I joined the 6
                    months internship program under the guidance of Manish
                    Bhatia sir. He is simply a genius teacher providing valuable
                    information to all aspiring students. That was a great
                    decision for me to enroll in the special 6-months internship
                    program of CodeSquadz. This IT training institute is truly a
                    temple to learn JAVA and become proficient. The learnings I
                    got here will help me to grow my career.
                  </p>
                  <p>
                    <strong>- Neha Dalish (TCS)</strong>
                  </p>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      width="495"
                      height="275"
                      src="https://www.youtube.com/embed/zVE2KPXxWY0"
                      title="Placed Student Reviews || Success Story || Placed in Bitcomm Technologies || CodeSquadz"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                  <p>
                    It is a wonderful experience for me to turn from a student
                    to an IT professional. This all started when I joined the 6
                    months internship program under the guidance of Manish
                    Bhatia sir. He is simply a genius teacher providing valuable
                    information to all aspiring students. That was a great
                    decision for me to enroll in the special 6-months internship
                    program of CodeSquadz. This IT training institute is truly a
                    temple to learn JAVA and become proficient. The learnings I
                    got here will help me to grow my career.
                  </p>
                  <p>
                    <strong>- Saurav Kumar (Bitcomm Technology)</strong>
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="myheading-1 mt-3 text-center">
              Still have doubts? We have all the answers
            </h2>
          </div>

          <div className="col-12 mt-5 mb-4">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header " id="flush-headingOne">
                  <button
                    className="accordion-button collapsed bg-danger text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Is online Java Training Beneficial
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed bg-primary text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Does it Cost most to join codesqudz?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed bg-success text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How is codesqudz Superior to other Institute?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed bg-info text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    In which IT company codesqudz Provides the Training?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed bg-dark text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Is there a way to Connect with CodeSquadz
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-md-7">
              <h2 className="myheadingd-2 mt-3 text-center">
                Start Learning With CodeSquadz<br></br>
                Download Our App
              </h2>
              <p className="myparagraph mt-3">
                Founded by our director, Mr. Chandrakant Agrawal, CodeSquadz
                boasts of a world-class learning platform for coding education.
                Thus, our mission is to continuously evolve with the changing
                dynamics of the technological world to transform learners into
                promising professionals under the guidance of Mr. Manish Bhatia.
              </p>
              <div className="d-flex text-center" style={{marginLeft: "100px"}}>
             <h1 style={{fontSize: "100px"}}><BiLogoPlayStore></BiLogoPlayStore></h1>
             <h1 style={{fontSize: "100px"}}><FaWindows></FaWindows></h1>
             </div>

            </div>
            <div className="col-md-5">
                <img src={img4} alt="img4"  className="d-block w-100 img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
