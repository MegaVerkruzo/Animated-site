import React from 'react';
import {useState} from 'react';
import {Spring, animated, useSpring} from "react-spring";

const AnimatedPage = () => {

    return (
        <animated.div>
            <Spring
                from={{opacity: 0}}
                to={{opacity: 1}}
                config={{duration: 5000}}
            >
                {(props) => (
                    <h2 style={props}>Start editing to see some magic happen</h2>
                )}
            </Spring>
        </animated.div>

    )
}

export default AnimatedPage;