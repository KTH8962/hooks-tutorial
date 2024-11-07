import React, { useState } from 'react';
import Info from './Info';

function Visible() {
    const [visible, setVisible] = useState(false);
    return (
    <div>
        <button type='button' onClick={() => setVisible(!visible)}>{visible ? '숨기기' : '보이기'}</button>
        {visible && <Info />}
    </div>
    );
}

export default Visible
