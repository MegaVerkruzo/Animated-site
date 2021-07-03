import React from 'react';
import {useState} from 'react';
import {Spring, animated, useSpring} from "react-spring";

const AnimatedPage = () => {

    const props = useSpring({from: {opacity: 0}, to: {opacity: 1}, config: {duration: 5000}});

    return (
        <animated.h2 style={props}>
            Start
        </animated.h2>
    )
}

export default AnimatedPage;