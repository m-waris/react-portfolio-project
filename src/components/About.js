import React from 'react'
import image from '../images/waris.jpg'
export default function About() {
    return (
        <>
            <div className="container mt-5 mb-5" id='about'>
                <div className="row">
                    <div className="col-10 about-card ">
                    <div className="card mb-3 bg-dark text-white">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={image} className="img-fluid rounded-start card-image" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">About</h5>
                                    <p className="card-text">My name is <strong>Muhammad Waris Mahmood</strong> </p>
                                    <p className="card-text">I am a software engineer. I have a passion for technology and innovation. I have honed my skills by
participating in technical competitions such as Speed Programming and Blind Coding. I have also
balanced my academic pursuits with extracurricular activities such as sports and painting. Additionally,
I have gained valuable experience as a Teacher Assistant, which has taught me how to communicate
effectively and professionally in different settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                

            </div>

        </>
    )
}
