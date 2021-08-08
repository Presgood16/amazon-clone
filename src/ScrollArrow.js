import React, { useState } from 'react';
import './ScrollArrow.css';

function ScrollArrow() {

       const [showScroll, setShowScroll] = useState(false)

    const checkStrollTop = () =>{
        if(!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkStrollTop)

    return (
        <div>
            <p className="scrollTop" onClick={scrollTop}>Back to Top</p>
        </div>
    )
}

export default ScrollArrow
