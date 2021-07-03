import React from 'react';
import {useState} from 'react';
import {Spring, animated, useSpring} from "react-spring";

const AnimatedPage = () => {

    return (
        <Spring
            from={{opacity: 0}}
            to={{opacity: 1}}
            config={{duration: 5000}}
        >
            {props => (<animated.h2 style={props}>Start editing</animated.h2>)}
        </Spring>
    )
}

export default AnimatedPage;