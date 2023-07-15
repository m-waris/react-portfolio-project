import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="container col-10 bg-dark mt-5 mb-5 pb-5 rounded-2" id='contact'>
                <div className="card bg-dark text-center border-0">
                    <div className="card-body">
                        <h5 className="card-title">Contact Me
                    </h5>
                        </div>
                    
                </div>
                <div className="form-floating mb-3 text-dark w-50 mx-auto ">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Full Name" />
                    <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3 text-dark w-50 mx-auto ">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3 text-dark w-50 mx-auto">
                    <textarea className="form-control " placeholder="type message here" id="floatingTextarea2" style={{height:'100px'}}></textarea>
                    <label for="floatingTextarea2">Message</label>
                </div>
                <div className="form-floating w-50 mx-auto">
                    <button className="btn btn-outline-primary w-100 border-2 rounded-5">Send</button>
                </div>
            </div>

        </>
    )
}
