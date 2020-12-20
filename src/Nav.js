import React, {useEffect, useState} from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow]  = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if (window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])


    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img
                className='nav_logo'
                src='https://th.bing.com/th/id/OIP.0-lS_7BPkwY-RTbBq9lM0AHaEc?w=292&h=180&c=7&o=5&dpr=1.25&pid=1.7'
                alt='   Netflix Logo'
            />
            <img
                className='nav_avtar'
                src='https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1'
                alt='   Netflix Logo'
            />
        </div>



    )
}

export default Nav
