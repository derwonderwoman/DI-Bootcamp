import React from "react";
import Data from "../data.json";

const { Skills } = Data;

const Skill = () => {
  return (
    <div>
      {Skills.map((skillArea, index) => (
        <div key={index}>
          <h2>{skillArea.Area}</h2>
          <ul>
            {skillArea.SkillSet.map((skill, skillIndex) => (
              <li key={skillIndex}>
                <a href={skill}>{skill.Name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skill;