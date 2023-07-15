import React from 'react'
import movie from '../images/movie.jpeg'
import counter from '../images/counter.jpeg'
import pacman from '../images/pacman.jpeg'
import tictactoe from '../images/tictac.jpeg'
import 'react-medium-image-zoom/dist/styles.css'
import Projectimage from './Projectimage'

export default function Projects() {
   
   
  return (
    <>
    <div className="container mt-5" id='projects'>
        <div className="card bg-dark">
            <div className="card-body">
                <h5 className="card-title text-center">Projects</h5>
                <div className="row mt-3">
                    <div className="col-12 mb-3 mb-sm-0">
                        <div className="card border-light  text-center shadow-lg">
                            <Projectimage imgsrc={movie} imgtext='Movie App' />
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                <div className="col-12 mb-3 mb-sm-0">
                        <div className="card text-center border-light">
                            <Projectimage imgsrc={counter} imgtext='Counter App' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3 mb-sm-0">
                        <div className="card text-center border-light mt-3">
                            <Projectimage imgsrc={pacman} imgtext='Pacman Game' />
                        </div>
                    </div>
                 
                </div>
                <div className="row">
                <div className="col-12  mb-3 mb-sm-0">
                        <div className="card   text-center border-light mt-3">
                            <Projectimage imgsrc={tictactoe} imgtext='Tic Tac Toe Game' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
        

    </>
  )
}
