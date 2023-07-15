import React from 'react'
import node from '../images/node.png'
import react from '../images/react.png'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/javascript.png'
import bootstrap from '../images/bootstrap.png'

export default function
    () {
    return (
        <>
        <div className="container mb-5" id='skills'>
            <div className="card bg-dark">
                <div className="card-body">
                    <h5 className="card-title text-center">Skills</h5>
                    <div className="row mt-3">
                        <div className="col-md-4 mb-3 mb-sm-0">
                            <div className="card border-light bg-dark text-white text-center shadow-lg">
                                <div className="card-body">
                                    <img src={html} alt="" className='w-25' />
                                    <p className="card-text ms-2">HTML</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-3 mb-sm-0">
                            <div className="card bg-dark text-white text-center border-light">
                                <div className="card-body">
                                    <img src={css} alt="" className='w-25' />
                                    <p className="card-text ms-2">CSS</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-sm-0">
                            <div className="card bg-dark text-white text-center border-light">
                                <div className="card-body">
                                    <img src={js} alt="" className='w-25' />
                                    <p className="card-text ms-2">JavaScript</p>

                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-sm-0">
                            <div className="card bg-dark text-white text-center border-light mt-3">
                                <div className="card-body">
                                    <img src={bootstrap} alt="" className='w-25' />
                                    <p className="card-text ms-2">Bootstrap</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-3 mb-sm-0">
                            <div className="card bg-dark text-white text-center border-light mt-3">
                                <div className="card-body">
                                    <img src={react} alt="" className='w-25' />
                                    <p className="card-text ms-2">React JS</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-sm-0">
                            <div className="card bg-dark text-white text-center border-light mt-3">
                                <div className="card-body">
                                    <img src={node} alt="" className='w-25' />
                                    <p className="card-text ms-2">Node JS</p>

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
