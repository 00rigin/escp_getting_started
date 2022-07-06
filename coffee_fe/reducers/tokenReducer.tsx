import axios from "axios"
import { ActionType, createAction, createReducer } from 'typesafe-actions';
import {Dispatch} from "redux";
import {LoginRs} from "../interfaces/rs/loginRs";

export interface TokenState {
    token:string,
}

export const initialState: TokenState = {
    token:"",
};


export const TOKEN_UPDATE = 'tokenReducer/TOKEN_UPDATE';
export const TOKEN_CLEAR = 'tokenReducer/TOKEN_CLEAR';

// Action Function Definition
export const updateTokenState = createAction(TOKEN_UPDATE)<TokenState>();
export const clearTokenState = createAction(TOKEN_CLEAR)<TokenState>();

export const actions = { updateTokenState, clearTokenState };
type ReducerActions = ActionType<typeof actions>;

const tokenReducer = createReducer<TokenState, ReducerActions>(
    initialState,
    {
        [TOKEN_UPDATE]: (state, action)=>{
            return{
                ...state,
                token: action.payload.token,
            };
        },
        [TOKEN_CLEAR]: (state, action)=>{
            return{
                ...state,
                token: '',
            }
        }
    },
);

// 각 리듀서 별로 디스패치를 따로 만들어줌.
export const TokenDispatch = (dispatch: Dispatch, type: string, payload: { token: LoginRs }) => {
    // axios.defaults.headers.common["Authorization"] = 'Bearer &{payload.token}';
    // document.cookie = 'accessToken = ${payload.token}';
    // console.log(payload.token);
    // axios.defaults.headers.common["Authorization"] = payload.token.token;
    dispatch({type: type, payload : payload});
}


export default tokenReducer;
