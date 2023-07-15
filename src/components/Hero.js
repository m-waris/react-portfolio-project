import React from 'react'
import Typewriter  from 'typewriter-effect'

export default function Hero() {
  return (
    <div className="hero-wrapper" >
        <div className="heroInfo">
            <h1 className='display-3'>Full Stack Web Developer</h1>
            <Typewriter  
            onInit={(typewriter) => {
                typewriter.typeString('Hello! I am a Full Stack Web Developer')
                .pauseFor(2000)
                .deleteAll()
                .typeString('My name is <strong>Muhammad</strong>')
                .pauseFor(500)
                .deleteChars(8)
                .typeString('<strong>Waris</strong>')
                .pauseFor(500)
                .deleteChars(5)
                .typeString('<strong>Mahmood</strong>')
                .pauseFor(500)
                .deleteAll()
                .start();
                }}
            />
        </div>
  
    </div>
  )
}
