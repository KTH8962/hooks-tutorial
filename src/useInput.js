import { useReducer } from 'react'

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

function UseInput(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    }
    return [state, onChange];
}

export default UseInput
