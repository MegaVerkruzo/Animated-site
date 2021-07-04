import logo from './logo.svg';
import './App.css';
import AnimatedPage from "./components/AnimatedPage/AnimatedPage";
import {Spring} from "react-spring";
import React from 'react';
import AnimatedImage from "./components/AnimatedImage/AnimatedImage";
import AnimatedSlides from "./components/AnimatedSlides/AnimatedSlides";
import AnimatedBasics from "./components/AnimatedBasics/AnimatedBasics";

function App() {
    return (
        <div className="App">
            {/*<AnimatedPage />*/}
            {/*<AnimatedImage />*/}
            {/*<AnimatedSlides />*/}
            <AnimatedBasics />
        </div>
    );
}

export default App;
