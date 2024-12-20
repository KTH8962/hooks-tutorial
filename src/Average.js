import React, { useMemo, useState } from 'react'

const getAverage = numbers => {
    console.log('평균값 계산중...', numbers);
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
}

function Average() {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    }
    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button type='button' onClick={onInsert}>입력</button>
            <ul>
                {list.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul>
            <div>
                <b>평균 값: </b> {avg}
            </div>
        </div>
    )
}

export default Average
