import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <Fade bottom cascade>
            <h1>Skills</h1>
          </Fade>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
