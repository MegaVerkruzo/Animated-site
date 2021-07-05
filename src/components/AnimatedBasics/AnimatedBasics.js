import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import Hello from "./Hello/Hello";
import Number from "./Number/Number";

const AnimatedBasics = () => {
    return (
        <div>
            <Hello />
            <Number />
        </div>
    )
}

export default AnimatedBasics