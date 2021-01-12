import React from "react";
import ReactTooltip from "react-tooltip";

function SocialMedia() {
  return (
    <div className="container bottom-gap">
      <div className="icons">
        <div className="">
          <a
            href="https://www.linkedin.com/in/ozobianwadibia"
            data-tip
            data-for="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-lg" aria-hidden="true"></i>
          </a>
          <ReactTooltip id="linkedin" effect="solid" place="left">
            <span>LinkedIn</span>
          </ReactTooltip>
        </div>
        <div className="">
          <a
            href="https://twitter.com/ozobianwadibia"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="twitter"
          >
            <i className="fab fa-twitter fa-lg" aria-hidden="true"></i>
          </a>
          <ReactTooltip id="twitter" effect="solid" place="top">
            <span>Twitter</span>
          </ReactTooltip>
        </div>
        <div className="">
          <a
            href="https://github.com/ozobianwadibia"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="github"
          >
            <i className="fab fa-github fa-lg" aria-hidden="true"></i>
          </a>
          <ReactTooltip id="github" effect="solid" place="top">
            <span>GitHub</span>
          </ReactTooltip>
        </div>
        <div className="">
          <a
            href="https://trailblazer.me/id/ozobia"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="salesforce"
          >
            <i className="fab fa-salesforce fa-lg" aria-hidden="true"></i>
          </a>
          <ReactTooltip id="salesforce" effect="solid" place="right">
            <span>Trailhead</span>
          </ReactTooltip>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
