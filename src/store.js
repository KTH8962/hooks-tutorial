import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer2';

/*// 초기 상태
const initialState = {
    isLoggedIn: false,
    isActive: false
}

// 액션 타입 정의
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const TOGGLE_CLASS = 'TOGGLE_CLASS';

// 액션 생성자
export const login = () => ({
    type: LOGIN,
});

export const logout = () => ({
    type: LOGOUT,
});

export const toggleClass = () => ({
    type: TOGGLE_CLASS,
});

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        case TOGGLE_CLASS:
            return {
                ...state,
                isActive: !state.isActive
            }
        default:
            return state;
    }
};
*/

// 스토어 생성
const store = configureStore({
    reducer: rootReducer,
});

export default store
