import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, toggleClass } from './reducer2';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const isActive = useSelector((state) => state.isActive);

  return (
    <div className="app">
      <h1>Redux 상태 관리 예제</h1>

      <div className="auth">
        {isLoggedIn ? (
          <div>
            <p>로그인 완료!</p>
            <button onClick={()=>dispatch(logout())}>로그아웃</button>
          </div>
        ) : (
          <div>
            <p>로그인 해주세요.</p>
            <button onClick={()=>dispatch(login())}>로그인</button>
          </div>
        )}
      </div>

      <div className="box-container">
        <div className={`box ${isActive ? 'active' : ''}`}></div>
        <button className="toggle-button" onClick={()=>dispatch(toggleClass())}>
          Toggle Class
        </button>
      </div>
    </div>
  );
};

export default App;