import React, { useReducer } from 'react'

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

function Info2() {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nick: ''
    });

    const {name, nick} = state;

    const onChange = e => {
        dispatch(e.target);
    }

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

export default Info2
