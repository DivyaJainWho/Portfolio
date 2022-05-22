import React from 'react'
import './profile.css'
import Profilepic from '../../images/Profilepic.jpeg'

function Profile() {
  return (
    <div className='profile'>
      <img src={Profilepic} alt='profilepic' className='profilepic'/>
      <div className='text'>
      <div className='intro'>Hi There<span class="wave">👋</span> ! I'm</div><br/>
      <div className='name'>DIVYA JAIN</div><br/>
      <div className='intro'>Web Developer | Programmer | Learner 👩‍💻</div>
      </div>
    </div>
  )
}

export default Profile