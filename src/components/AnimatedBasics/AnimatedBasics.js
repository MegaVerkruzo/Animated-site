import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import Hello from "./Hello/Hello";
import Number from "./Number/Number";
import Scroll from "./Scroll/Scroll";

const AnimatedBasics = () => {
    return (
        <div>
            <Hello />
            <Number />
            <Scroll />
        </div>
    )
}

export default AnimatedBasics