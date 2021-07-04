import logo from './logo.svg';
import './App.css';
import AnimatedPage from "./components/AnimatedPage/AnimatedPage";
import {Spring} from "react-spring";
import React from 'react';
import AnimatedImage from "./components/AnimatedImage/AnimatedImage";

function App() {
    return (
        <div className="App">
            <AnimatedPage />
            <AnimatedImage />
        </div>
    );
}

export default App;
