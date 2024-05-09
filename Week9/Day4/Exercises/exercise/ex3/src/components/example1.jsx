import React from "react"
import Data from "../data.json";

const { SocialMedias } = Data;

const Contacts = () => {
    return (
      <div>
        <ul>
        {SocialMedias.map((socialMedia, index) => (
          <li key={index}>
            <a href={socialMedia}>{socialMedia}</a>
          </li>
        ))}
      </ul>
      </div>
    );
  }

export default Contacts;