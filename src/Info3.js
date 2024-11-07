import React from 'react'
import UseInput from './useInput';

function Info3() {
    const [state, onChange] = UseInput({
        name: '',
        nick: ''
    });

    const {name, nick} = state;

    return (
        <>
            <div>
                <input name='name' value={name} onChange={onChange} />
                <input name='nick' value={nick} onChange={onChange} />
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

export default Info3
