import React from 'react'
import instagram from '../images/Instagram.png'
import linkedin from '../images/LinkedIn.png'
import github from '../images/GitHub.png'
import logo from '../images/logo.png'

export default function Footer() {
    return (
        <>
            <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
                <div className="container text-center">
                    <small>Copyright &copy; WARIS</small>
                </div>
                <div className="container text-center">
                    <div className="col-12">
                        <a href="https://github.com/m-waris" target='_blank' rel='noreferrer'> <img src={github} alt="" style={{ width: '40px' }} className='pe-2' /></a>
                        <a href="https://www.linkedin.com/in/muhammad-waris-mahmood-16503820b/" target='_blank' rel='noreferrer'><img src={linkedin} alt="" style={{ width: '50px' }} className='pe-2 ps-2' /></a>
                        <a href="https://www.instagram.com/waris_0_0/" target='_blank' rel='noreferrer'><img src={instagram} alt="" style={{ width: '40px' }} className='ps-2' /></a>
                    </div>
                    <div className="col-12 mt-2">
                        <a href="/"><img src={logo} alt="" className='ps-2' /></a>
                    </div>



                </div>
            </footer>
        </>
    )
}
