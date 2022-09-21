import React from "react";
import {Button} from "./Button";


// const myFirstSubscriber=()=>{
//     console.log('Hello my name is Vasya');
// }
//
// const mySecondSubscriber=()=>{
//     console.log("Hello I'm Ivan");
// }

const Button1Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age)
}

const Button2Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age)
}

const Button3Foo = () => {
    console.log("I'm stupid button")
}


export const Youtube = () => {
    return (
        <div className={'App'}>
            <Button name={'YoutubeChannel-1'} callBack={() => Button1Foo("I'm Semion", 27)}/>
            <Button name={'YoutubeChannel-2'} callBack={() => Button2Foo("I'm Caroline", 28)}/>
            <Button name={"I'm button"} callBack={Button3Foo}/>
        </div>
    );
};