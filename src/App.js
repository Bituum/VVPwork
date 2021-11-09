import logo from './logo.svg';
import './App.css';
import React from "react";
import MainHeader from "./components/main/mainHeader/mainHeader";
import MainBody from "./components/main/mainBody/mainBody";

function App() {
    return (
        <div className="App">
            <div className="mainContainer">
                <MainHeader/>
                <MainBody/>
            </div>
        </div>
    );
}

export default App;
