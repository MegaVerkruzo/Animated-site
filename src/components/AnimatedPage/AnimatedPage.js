import React from 'react';
import {useState} from 'react';
import {Spring, animated, useSpring} from "react-spring";

const AnimatedPage = () => {
    return (
        <Spring
            from={{opacity: 0, transform: 'translateY(-3rem)'}}
            to={{opacity: 1, transform: 'translateY(0rem)'}}
            config={{duration: 2500}}
        >
            {props => (<animated.h2 style={props}>Start editing</animated.h2>)}
        </Spring>
    )
}

export default AnimatedPage;