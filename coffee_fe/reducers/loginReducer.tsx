import { ActionType, createAction, createReducer } from 'typesafe-actions';
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";

export interface LoginState {
    login: boolean,
}

export const initialState: LoginState = {
    login: false,
};

export const LOGIN_UPDATE = 'loginReducer/LOGIN_UPDATE';

// Action Function Definition
export const updateLoginState = createAction(LOGIN_UPDATE)<LoginState>();

export const actions = { updateLoginState };
type ReducerActions = ActionType<typeof actions>;

const loginReducer = createReducer<LoginState, ReducerActions>(
    initialState,
    {
        [LOGIN_UPDATE]: (state, action) => {
            if(state.login === false){
                return{
                    ...state,
                    login:true,
                };
            }
            else{
                return{
                    ...state,
                    login: false,
                }
            }
        }

    },
);

// 각 리듀서 별로 디스패치를 따로 만들어줌.
export const loginDispatch = (dispatch:Dispatch, type:string) => {
    dispatch({type: type});
}

export default loginReducer;
