import React, {useState} from 'react';
import {useTransition, useSpring, animated} from 'react-spring';
import classes from './AnimatedSlides.module.css';
import field from './../../files/images/field.jpeg';
import ice from './../../files/images/ice.jpg';
import sea from './../../files/images/sea.jpeg';
import sunshine from './../../files/images/sunshine.jpeg';

const slides = [
    {
        id: 0,
        image: field
    },
    {
        id: 1,
        image: sea
    },
    {
        id: 2,
        image: sunshine
    }
]

const AnimatedSlides = () => {
    const [activeIndex, setActiveIndex] = useState(2);
    const [previousIndex, setPreviousIndex] = useState(0);
    let fromRight = true;


    const transitions = useTransition(activeIndex, {
        key: activeIndex,
        from: { opacity: 0, transform: `${fromRight ? `translateX(100%)` : `translateX(-100%)`}`},
        enter: { opacity: 1, transform: `translateX(0%)` },
        leave: { opacity: 0, transform: `${fromRight ? `translateX(-100%)` : `translateX(100%)`}`},
        config: {
            duration: 750
        }
    });

    const updFrom = () => {
        if (activeIndex > previousIndex) {
            fromRight = true;
        } else {
            fromRight = false;
        }
    }

    const previousImage = () => {
        setPreviousIndex(activeIndex);
        setActiveIndex(activeIndex - 1);
        updFrom();
    }

    const nextImage = () => {
        setPreviousIndex(activeIndex);
        setActiveIndex(activeIndex + 1);
        updFrom();
    }

    return (
        <div className={classes.content}>
            <div>
                <button onClick={ previousImage } disabled={activeIndex === 0}>Previous</button>
                <button onClick={ nextImage } disabled={activeIndex === slides.length - 1}>Next</button>
            </div>
            {transitions((style, i) => (
                <animated.img
                    className={classes.content__picture}
                    style={style}
                    src={slides[i].image}
                />
            ))}

        </div>
    )
}

export default AnimatedSlides;