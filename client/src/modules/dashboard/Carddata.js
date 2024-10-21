import React, { useEffect, useState } from "react";
import {data} from "./Coursedata";


const Carddata = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4 myheading-2 mt-3 text-center">
              We offer Training on Live Projects
            </h2>
          </div>
          {cards.map((d, index) => {
            return (
              <div className="col-md-3 mt-3 mb-3 mycardsres " key={index} >
                <div className={`card text-white ${d.color} h-100` }>
                  <div className="card-body text-center" style={{borderRadius: "20px"}}>
                  <div className="card-icon mb-3">{d.img}</div>

                    <h5 className="card-title text-center">{d.title}</h5>
                    <hr className="h2 border"></hr>
                    <p className="card-text">Language: {d.language}</p>
                    <p className="card-text">Batch: {d.batch}</p>
                  </div>
                  <div className="card-footer bg-white text-center ">
                    <button className="mybtn">{d.buttonText}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carddata;