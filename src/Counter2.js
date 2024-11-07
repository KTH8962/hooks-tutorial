import React, { useReducer } from 'react'

function reducer(num, action) {
    switch(action.type) {
        case 'PLUS':
            return {value: num.value + 1};
        case 'MINUS':
            return {value: num.value - 1};
        default:
            return num;
    }
}

function Counter2() {
    const [num, dispatch] = useReducer(reducer, {value: 0});
    return (
        <>
            <p>현재 카운터 값은 <b>{num.value}</b></p>
            <button type='button' onClick={() => dispatch({type:'PLUS'})}>+1</button>
            <button type='button' onClick={() => dispatch({type:'MINUS'})}>-1</button>
        </>
    )
}

export default Counter2
