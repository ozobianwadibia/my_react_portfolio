import React from "react";
import Ozobia from "../images/Ozobia.png";

function Introduction() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src={Ozobia}
            className="img-fluid rounded-lg border border-dark mx-auto d-block portfolioPic"
            alt="main portfolio pic"
          />
        </div>
        <div className="col-md-8">
          <h4 className="text-left">
            <span className="name">About Ozobia Nwadibia</span>
          </h4>
          <p className="aboutMe">
            Devoted and dedicated techie who greatly appreciates and loves web
            and software development. Loves coding a lot. A fast and
            enthusiastic learner willing to take on challenges to better oneself
            and those around. Quite passionate about the craft and the general
            idea of creating something out of nothing, digitally.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
