import React from 'react'
import call from '../../assets/call.svg'
import location from '../../assets/location.svg'
import mail from '../../assets/mail.svg'
import behind from '../../assets/behind.svg'
import linkedIn from '../../assets/linkedIn.webp'
import Git from '../../assets/Git.png'
import './Contact.css'

const Contact = () => {

    // const[result, setResult] = useState("")

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     setResult("Sending....");
    //     const formData = new FormData(event.target);
    
    //     formData.append("access_key", "2c1485fe-a652-4982-8ce3-8a433c5b51f0");
    
    //     const response = await fetch("https://api.web3forms.com/submit", {
    //       method: "POST",
    //       body: formData
    //     });
    
    //     const data = await response.json();
    
    //     if (data.success) {
    //       setResult("Form Submitted Successfully");
    //       alert(response.message = "Email sent successfully.")
    //       event.target.reset();
    //     } else {
    //       console.log("Error", data);
    //       setResult(data.message);
    //     }
    //   };

  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={behind} alt='na'/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am currently available, feel free to reach out to me.</p>
            <div className='contact-details'>
                <div className="contact-detail">
                     <img src={mail} alt='' style={{width:'18px',height:'18px'}}/>     <p>prem.rathod.2715@gmail.com</p>                   
                </div>
                <div className="contact-detail">
                     <img src={call} alt='' style={{width:'18px',height:'18px'}}/>  <p>+91 7020056977</p>  
                </div>
                <div className="contact-detail">
                     <img src={location} alt='' style={{width:'18px', height:'18px'}}/>   <p>Maharashra, India</p>
                </div>
                </div>
            </div>
            
            {/* <form className='contact-right' onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message</label>
                <textarea placeholder='Write your message' name='message' rows='8'></textarea>
                <button type='submit' className='contact-submit'>Send message</button>
            </form> */}
            <div className='social'>
                <h1 style={{marginLeft:'2 0%'}}>You can also connect with me,<br/> by clicking this icon.👇</h1><br/>
                  <a href='https://www.linkedin.com/in/prem-arun-rathod'><img src={linkedIn} alt='' className='linkedin'/></a> 
                  <a href='https://github.com/PRathod27/'><img src={Git} alt=''></img></a>
            </div>
        </div>
    </div>
  )
}

export default Contact