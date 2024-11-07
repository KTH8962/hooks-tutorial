import React, { createContext, useContext } from 'react'

const ThemeContext = createContext('skyblue');
function ContextSample() {
    const theme = useContext(ThemeContext);
    const style = {
        width: '100px',
        height: '100px',
        background: theme
    }
    return (
        <div style={style}></div>
    )
}

export default ContextSample
