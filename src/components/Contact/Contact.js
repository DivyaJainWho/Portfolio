import myResume from '../../resume/Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import React from 'react'
import './Contact.css'

const Contact = () =>{
    return (
        <div className='resume'>
            <p className='textres'>Click below to Download Resume for reference.</p>
            <FontAwesomeIcon icon={faDownload} style={{fontSize:'48px', color:'white', padding:'3%'}}/>
            <a href={myResume} download="Resume.pdf" className='down'>Download Resume</a>
            <p className='connect'>Connect for further details</p>
            <div className='contactme'>
                <a href='https://twitter.com/Divyajainwho?t=1nX0PUHNokHRFAQQlo-GjQ&s=08' className='icons'><FontAwesomeIcon icon={faTwitter} style={{fontSize:'24px', color:'white', paddingLeft:'3%'}}></FontAwesomeIcon></a>
                <a href='https://github.com/DivyaJainWho' className='icons'><FontAwesomeIcon icon={faGithub} style={{fontSize:'24px', color:'white', paddingLeft:'3%'}}></FontAwesomeIcon></a>
                <a href='https://www.linkedin.com/in/divya-jain-who' className='icons'><FontAwesomeIcon icon={faLinkedin} style={{fontSize:'24px', color:'white', paddingLeft:'3%'}}></FontAwesomeIcon></a>
                <a href='https://www.divyajainwho@gmail.com' className='icons'><FontAwesomeIcon icon={faGoogle} style={{fontSize:'24px', color:'white', paddingLeft:'3%'}}></FontAwesomeIcon></a>
            </div>
        </div>

    )
}

export default Contact;