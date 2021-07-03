import logo from './logo.svg';
import './App.css';
import AnimatedPage from "./components/AnimatedPage/AnimatedPage";
import {Spring} from "react-spring";
import React from 'react';

function App() {
    return (
        <div>
            <h1>Hello spring</h1>
            <AnimatedPage />
        </div>
    );
}

export default App;
