import React from 'react'
import './Experience.css'
import behind from '../../assets/behind.svg'

const Experience = () => {
  return (
    <div className='experience' id='experience'>
         <div className="experiences">
         <header className='title'>
                  <h2 style={{position:'relative'}}>Expercience</h2>
                  <img src={behind} alt='' />
              </header> 
            <section className='col'>
              <div className='contents'>
                <div className="box">
                  <h4>1. Software Engineer Fellow</h4>
                  <h3>HeadStar AI - 2024</h3>
                  <p style={{padding:'20px',fontSize:'20px'}}>
                  <li>Over the next 5 weeks, I'll be building 5 AI projects.</li>
                  <li>Implementing this skills will significantly enhance my software development skills.</li>
                  <li>I'll leverage my expertise in Node.js and MongoDB</li> 
                  <li>Tackle real-time AI projects, utilizing NoSQL and cloud solutions.</li></p>
                </div>
                <br/>
                <br/>
                <div className="box">
                  <h4>2. Full Stack Web Developer(MERN)</h4>
                  <h3>NullClass - 2023</h3>
                  <p style={{padding:'20px',fontSize:'20px'}}><li> Learned Framework like React</li>
                    <li>Learned the working of .jsx file.</li>
                    <li>Helped me to create two websites.</li>
                    <li>Created Stack-Overflow-Clone.</li>
                    <li>Integrated Chatbot using Nodejs which will answer every question.</li>
                    <li>Also helped me to create academic projects.</li></p>
                </div>
              </div>
            </section>
        </div> 
    </div>
  )
}

export default Experience