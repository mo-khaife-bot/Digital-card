import React from "react";
import CardPhoto from "../images/icon.png";

import { FontAwesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="Info--body">
      <div className="card--photo" alt="digital-card" src={CardPhoto}></div>
      <div className="Info--main upload-icon">
        <h1 className="card--title">Mohomed Khaife Ali</h1>
        <h3 className="card--job">Junior Frontend Developer</h3>
        <div className="btn--container">
          <button type="button" className="email--btn">
            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
            <span>Email</span>
            {/* /**
             * TODO need to add hyperlink and figure out how to launch email upon click
             */}
          </button>
          <button type="button" className="github--btn">
            <a href="https://github.com/MuhammadAli-ai">
              {" "}
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
              Github
            </a>

            {/* /**
             * TODO need to add hyperlink to github acct
             */}
          </button>
        </div>

        <p>mo-khaife.website</p>
      </div>
    </div>
  );
}
