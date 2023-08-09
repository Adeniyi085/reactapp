import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'> 
      <div className="gpt3__header-container">
        <h1 className="gradient__text">Let's Build Something Amazing With GPT-3 Open AI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing.Not thoughts all exercise blessing. Indulgence way everything alteration boisterous the attachment.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content_people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  )
}

export default Header
