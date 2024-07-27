import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="about-skills" id='skills'>
        {/* <div className="title-skill"><h1 className='skill'>Skills</h1>
        <img src={behind} alt='' />
        </div>  */}
      <div className="skill-title">
        <h1 className='skills'>Skills</h1>
      </div>
      <div className='skills-section'>
            <div className="about-skill"><p>Html & CSS</p><hr style={{width:'50%'}}/> </div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:'70%'}}/> </div>
            <div className="about-skill"><p>ReactJS</p><hr style={{width:'80%'}}/> </div>
            <div className="about-skill"><p>NodeJS</p><hr style={{width:'90%'}}/> </div>
            <div className="about-skill"><p>ExpressJS</p><hr style={{width:'90%'}}/>  </div>
            <div className="about-skill"><p>MySQL</p><hr style={{width:'80%'}}/> </div>            
            <div className="about-skill"><p>NOSQL</p><hr style={{width:'50%'}}/> </div> 
       </div>                  
    </div>
  )
}

export default Skills