import React, {useState} from 'react'
import {config, useSpring, animated} from "react-spring"


const Scroll = () => {
    const array = ['We', 'came.', 'We', 'saw.', 'We', 'kicked', 'this', 'ass.']

    const [flip, setFlip] = useState(false)
    const { scroll } = useSpring({
        from: {scroll: 0},
        to: {scroll: array.length * 50},
        reset: true,
        reverse: flip,
        delay: 400,
        config: {
            duration: 2000
        },
        onRest: () => setFlip(!flip)
    })

    return (
        <animated.div
            style={
                {
                    position: 'relative',
                    width: '300px',
                    height: 200,
                    overflow: 'auto',
                    fontSize: '3em'
                }
            }
            scrollTop={scroll}
        >
            {array.map((word, i) => (
                <div
                    key={`${word}_${i}`}
                    style={{}}
                >
                    {word}
                </div>
            ))}
        </animated.div>
    )
}

export default Scroll