import React, {useEffect} from 'react';
import {useState} from 'react';
import {Spring, animated, useSpring} from "react-spring";
import classes from './AnimatedPage.module.css';
import {Button} from "@material-ui/core";
const AnimatedPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const time = 1000;


    return (
        <div className={classes.header}>
            <Spring
                reset={true}
                from={{opacity: 0, transform: 'translateY(-3rem)'}}
                to={{opacity: 1, transform: 'translateY(0rem)'}}
                config={{duration: time}}
                reverse={isVisible}
            >
                {props => (<animated.h2 style={props}>Start editing</animated.h2>)}
            </Spring>
            <Button variant="contained" onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Показать' : 'Скрыть'}</Button>
        </div>
    )
}

export default AnimatedPage;