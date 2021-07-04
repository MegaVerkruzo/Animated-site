import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import Hello from "./Hello/Hello";

const AnimatedBasics = () => {
    return (
        <div>
            <Hello />
            <Star />
        </div>
    )
}

export default AnimatedBasics