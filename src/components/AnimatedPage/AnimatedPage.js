import React, {useEffect} from 'react';
import {useState} from 'react';
import {Spring, animated, useSpring, Transition} from "react-spring";
import classes from './AnimatedPage.module.css';
import {Button} from "@material-ui/core";


const AnimatedPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(true);
    const time = 2000;

    const rocket = () => {
        if (isFirstTime) {
            setIsFirstTime(!isFirstTime);
        }
        setIsVisible(!isVisible);
    }

    return (
        <div className={classes.header}>

            <Spring
                immediate={isFirstTime}
                reset={true}
                from={{opacity: 0, transform: 'translateY(-3rem)'}}
                to={{opacity: 1, transform: 'translateY(0rem)'}}
                config={{duration: time}}
                reverse={!isVisible}
            >
                {props => (<animated.h2 style={props}>
                      привет
                </animated.h2>)}
            </Spring>
            <Transition
                items={isVisible}
                enter={{opacity: 1, transform: 'translateY(0rem)'}}
                leave={{opacity: 0, transform: 'translateY(-3rem)'}}
                from={{opacity: 0, transform: 'translateY(-3rem)'}}
            >
                {item =>
                    item &&
                    (props => (<h2 style={props}>
                    🚀
                </h2>))}
            </Transition>
            <Button variant="contained" onClick={rocket}>{isVisible ? 'Скрыть' : 'Показать'}</Button>
        </div>
    )
}

export default AnimatedPage;