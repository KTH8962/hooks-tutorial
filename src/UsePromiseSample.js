import React from 'react';
import UsePromise from './usePromise';

const wait = () => {
    return new Promise(reslove => {
        setTimeout(() => {
            reslove('Hello Hooks!')
        }, 3000);
    });
}

function UsePromiseSample() {
    const [loading, resolved, error] = UsePromise(wait, []);
    if(loading) return <div>로딩중...!</div>;
    if(error) return <div>에러 발생!</div>;
    if(!resolved) return null;
    return <div>{resolved}</div>
}

export default UsePromiseSample
