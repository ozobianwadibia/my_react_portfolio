import React from "react";
import ReactTooltip from "react-tooltip";
import bookmarks from "../images/bookmarks.png";
import score from "../images/score.png";
import measurements from "../images/measurements.png";
import employee_directory from "../images/employee_directory.png";
import stocksearch from "../images/the-team.png";
import kudos from "../images/kudos.png";

function Projects() {
  return (
    <div className="container top-gap">
      <div className="row text-center bottom-gap">
        <div className="col-md-4">
          <a
            href="https://ozobianwadibia.github.io/bookmarks/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectPic"
          >
            <img
              className="img-fluid border border-dark"
              src={bookmarks}
              alt="Bookmarks"
            />
          </a>
          <a
            href="https://github.com/ozobianwadibia/bookmarks"
            className="text-uppercase mt-3 projectPicLabel"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="bookmarks"
          >
            Bookmarks
          </a>
          <ReactTooltip id="bookmarks" effect="solid" place="bottom">
            <span>Github link</span>
          </ReactTooltip>
        </div>
        <div className="col-md-4">
          <a
            href="https://ozobianwadibia.github.io/score_counter/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectPic"
          >
            <img
              className="img-fluid border border-dark"
              src={score}
              alt="Score Counter"
            />
          </a>
          <a
            href="https://github.com/ozobianwadibia/score_counter"
            className="text-uppercase mt-3 projectPicLabel"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="scoreCounter"
          >
            Score Counter
          </a>
          <ReactTooltip id="scoreCounter" effect="solid" place="bottom">
            <span>Github link</span>
          </ReactTooltip>
        </div>
        <div className="col-md-4">
          <a
            href="https://ozobianwadibia.github.io/si_measurements/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectPic"
          >
            <img
              className="img-fluid border border-dark"
              src={measurements}
              alt="S.I. Measurements"
            />
          </a>
          <a
            href="https://github.com/ozobianwadibia/si_measurements"
            className="text-uppercase mt-3 projectPicLabel"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="siMeasurements"
          >
            S.I. Measurements
          </a>
          <ReactTooltip id="siMeasurements" effect="solid" place="bottom">
            <span>Github link</span>
          </ReactTooltip>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4">
          <a
            href="https://ozobianwadibia.github.io/employee-directory/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectPic"
          >
            <img
              className="img-fluid border border-dark"
              src={employee_directory}
              alt="Employee Directory"
            />
          </a>
          <a
            href="https://github.com/ozobianwadibia/employee-directory"
            className="text-uppercase mt-3 projectPicLabel"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="employeeDirectory"
          >
            Employee Directory
          </a>
          <ReactTooltip id="employeeDirectory" effect="solid" place="bottom">
            <span>Github link</span>
          </ReactTooltip>
        </div>
        <div className="col-md-4">
          <a
            href="https://the-team-ozobia.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectPic"
          >
            <img
              className="img-fluid border border-dark"
              src={stocksearch}
              alt="Stocksearch Application"
            />
          </a>
          <a
            href="https://github.com/ozobianwadibia/the-team"
            className="text-uppercase mt-3 projectPicLabel"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="theTeam"
          >
            Team Management
          </a>
          <ReactTooltip id="theTeam" effect="solid" place="bottom">
            <span>Github link</span>
          </ReactTooltip>
        </div>
        <div className="col-md-4">
          <a
            href="https://tiny-improvements-ozobia.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectPic"
          >
            <img
              className="img-fluid border border-dark"
              src={kudos}
              alt="Kudos"
            />
          </a>
          <a
            href="https://github.com/ozobianwadibia/tiny-improvements"
            className="text-uppercase mt-3 projectPicLabel"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="tinyImprovements"
          >
            Tiny Improvements
          </a>
          <ReactTooltip id="tinyImprovements" effect="solid" place="bottom">
            <span>Github link</span>
          </ReactTooltip>
        </div>
      </div>
    </div>
  );
}

export default Projects;
