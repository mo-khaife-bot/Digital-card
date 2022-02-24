import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer--body">
      <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
      <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </div>
  );
}
