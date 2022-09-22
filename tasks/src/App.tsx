import React, {useState} from 'react';
import './App.css';
import {Youtube} from "./components/Youtube";
// import {NewComponent} from "./components/NewComponent";
// import {Simulate} from "react-dom/test-utils";
// import contextMenu = Simulate.contextMenu;

// const cars = [
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mercedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'}
// ]


function App() {
    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandler2=()=>{
        setA(a=0)
        console.log(a)
    }

    return (
        <div className="App">
            {/*<NewComponent topCars={cars}/>*/}
            {/*<Youtube/>*/}
            {/*<h1>{a}</h1>*/}
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>reset</button>
        </div>
    );
}

export default App;
