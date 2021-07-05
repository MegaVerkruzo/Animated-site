import React, {useState} from 'react'
import {useSpring, animated} from "react-spring";


const Number = () => {
    const [isOne, setIsOne] = useState(false);
    const { number } = useSpring({
        from : { number: 0 },
        to : { number: 3 },
        reset: true,
        reverse: isOne,
        delay: 400,
        config: {
            duration: 2000
        },
        onRest: () => setIsOne(!isOne)
    })
    return (
        <animated.div>
            {number.to(number => number.toFixed(3))}
        </animated.div>
    )
}

export default Number