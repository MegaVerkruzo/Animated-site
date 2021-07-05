import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'


const Hello = () => {
    const [isVisible, setIsVisible] = useState(false);
    const props = useSpring({
        from: {
            opacity: 1
        },
        to: {
            opacity: 0
        },
        reset: true,
        reverse: isVisible,
        delay: 200,
        config: {
            duration: 1000
        },
        onRest: () => setIsVisible(!isVisible)
    })

    return (
        <animated.h1
            style={props}
        >
            Hello
        </animated.h1>
    )
}

export default Hello;