import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../store/reducers/counterReducer";
import {getCounterValue} from "../../store/reducers/selectors/getCounterValue/getCounterValue";

const Counter = () => {

    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const onIncrement = () => {
        dispatch(increment());
    }

    const onDecrement = () => {
        dispatch(decrement());
    }

    return (
        <div>
            <h1 data-testid='h1-testid'>Value = {value}</h1>
            <button data-testid='increment-button-testid' onClick={onIncrement}>Increment</button>
            <button data-testid='decrement-button-testid' onClick={onDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;
