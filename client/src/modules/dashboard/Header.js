import React from "react";
import img1 from "../images/codesqudz1.png";
import img2 from "../images/img3.png";
import { FcOnlineSupport } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcBearish } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";

const Header = () => {
  return (
    <div>
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={img1}
                    className="d-block w-100 img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={img1}
                    className="d-block w-100 img-fluid"
                    alt="img1"
                  />
                </div>
                <div className="carousel-item img-fluid">
                  <img
                    src={img2}
                    className="d-block w-100 img-fluid"
                    alt="img2"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
                <button type="btn" className=" my-btn">
                  Enquire Now
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <h1 className="text-dark myheading-1">
              Best It Training Institute With 100% job Assistance
            </h1>
            <p className=" mt-2 myparagraph">
              CodeSquadz is a prestigious institute that provides career-focused
              industrial training. We have a team of dedicated and experienced
              mentors who can guide you toward building a bright future in IT.
              CodeSquadz is a prestigious institute that provides career-focused
              industrial training. We have a team of dedicated and experienced
              mentors who can guide you toward building a bright future in IT.
            </p>
            <p className="mt-2 myparagraph">
              CodeSquadz is a prestigious institute that provides career-focused
              industrial training. We have a team of dedicated and experienced
              mentors who can guide you toward building a bright future in IT.
              CodeSquadz is a prestigious institute that provides career-focused
              industrial training. We have a team of dedicated and experienced
              mentors who can guide you toward building a bright future in IT.
            </p>
            <h1 className="mt-2 text-dark myheading-1">Why codesquadz</h1>
            <p className="mt-2 myparagraph">
              CodeSquadz is a prestigious institute that provides career-focused
              industrial training. We have a team of dedicated and experienced
              mentors who can guide you toward building a bright future in IT.
              CodeSquadz is a prestigious institute that provides career-focused
              industrial training. We have a team of dedicated and experienced
              mentors who can guide you toward building a bright future in IT.
              prestigious institute that provides career
            </p>

            <p className="mt-2 myparagraph">
              industrial training. We have a team of dedicated and experienced
              mentors who can guide you toward building a bright future in IT.
              CodeSquadz is a prestigious institute that provides career-focused
              industrial training. We have a team of dedicated and experienced
            </p>
            <p className="mt-2 myparagraph">
              mentors who can guide you toward building a bright future in IT.
              CodeSquadz is a prestigious institute that provides career-focused
              industrial training. We have a team of dedicated and experienced
              mentors who can guide you toward building a bright future in IT.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row">
          <div className="col-md-2 col-sm-6">
            <div className="mycontainer">
              <h1 className=" my-icons">
                <FcOnlineSupport />
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                21+ yrs. Industry<br></br>
                Experience
              </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="mycontainer">
              <h1 className=" my-icons">
                <FcBusinessman />
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                Trained Student<br></br>
                5000
              </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="mycontainer">
              <h1 className=" my-icons">
                < FcBearish />
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                100% Success<br></br>
                Rate
              </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="mycontainer">
              <h1 className=" my-icons">
                <FcClock />
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                Corporate<br></br>
                Training
              </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="mycontainer">
              <h1 className=" my-icons">
                <FcConferenceCall />
              </h1>
              <p
                className="text-center"
                style={{
                  fontWeight: "500",
                  color: "black",
                  fontFamily: "sans-sarif",
                }}
              >
                100% Job<br></br>
                Assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
