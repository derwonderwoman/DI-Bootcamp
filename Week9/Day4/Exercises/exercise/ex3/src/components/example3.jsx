import React from "react";
import Data from "../data.json";

const { Experiences } = Data;

const Demo = () => {
  return (
    <div>
      {Experiences.map((experience, index) => (
        <div key={index}>
          <img src={experience.logo} alt={experience.companyName} />
          <a href = {experience.url}>{experience.companyName}</a>
            <div>
                {experience.roles.map((role,roleId) => (
                    <div>
                    <p>{role.title}</p>
                    <p>{role.startDate} {' '} {role.location}</p>
                    <p>{role.description}</p>
                    </div>
                ))}
            </div>
        </div>
      ))}
    </div>
  );
}

export default Demo;
