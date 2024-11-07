import React, { useEffect, useState } from 'react'

function Info() {
    const [name, setName] = useState('');
    const [nick, setNick] = useState('');
    
    useEffect(() => {
        console.log('렌더링완료!');
        console.log({name, nick});
        return () => {
            console.log('cleanup');
            console.log({name, nick});
        }
        // eslint-disable-next-line
    }, [name]);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNick = e => {
        setNick(e.target.value);
    }

    return (
        <>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nick} onChange={onChangeNick} />
            </div>
            <div>
                이름: <b>{name}</b>
            </div>
            <div>
                닉네임: <b>{nick}</b>
            </div>
        </>
    )
}

export default Info
