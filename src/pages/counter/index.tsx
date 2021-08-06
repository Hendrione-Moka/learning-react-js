import React from 'react';
import Button from "../../components/button";

const Counter = () => {
    const [counter, setCounter] = React.useState({
        value : 0,
        isShow : true
    });

    const increment = () => {
        const newValue = counter;
        newValue.value = newValue.value + 1;
        setCounter({...newValue});
    }

    const decrement = () => {
        const newValue = counter;
        newValue.value = newValue.value - 1;
        setCounter({...newValue});
    }

    return (
        //bisa pake <React.Fragment>
        <>
            <div>{counter.value}</div>
            <Button value='+' handleClick={increment}/>
            <Button value='-' handleClick={decrement}/>
            {counter.isShow ? <div>Muncul</div> : null}
            {counter.isShow && <div>Muncul</div> }
            {/*<button onClick={decrement}>-</button>*/}
        </>
    );
};



export default Counter;

// export const a = () => {};

//state vs NORMAL variables
//kalo changes to normal variables gak akan happen. gak ada callback.
//kalo ganti state, component will re-render

//cara pake state
//react hooks = baru
//class component vs functional components of react = lama

//spread operator ...
//Object.assign
//create an object
//modify the new object
//use the new object to replace the value.