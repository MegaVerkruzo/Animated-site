import React, {useState} from 'react';
import classes from './AnimatedImage.module.css';
import {useSpring, animated} from 'react-spring';
import sea from './../../files/images/sea.jpeg';
import nightCity from './../../files/images/nightCity.jpeg';

const AnimatedImage = () => {
    const [flipped, setFlipped] = useState(false);

    const {opacity, transform, duration} = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: {
            duration: 500
        }
    });

    return (
        <div onClick={() => setFlipped(!flipped)}>
            <animated.img className={classes.c} style={{
                opacity: opacity.interpolate(o => 1 - o),
                transform,
                duration
            }} src={sea}></animated.img>
            <animated.img className={classes.c} style={{
                opacity,
                transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                duration
            }} src={nightCity}></animated.img>
        </div>
    )
}

export default AnimatedImage;