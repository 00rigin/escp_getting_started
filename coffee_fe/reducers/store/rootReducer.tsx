import { combineReducers, Reducer, Action } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import CoffeeReducer, {CoffeeState} from "../coffeeReducer";
import LoginReducer, {LoginState} from "../loginReducer";
import TokenReducer,{TokenState} from "../tokenReducer";

export interface State {
    coffee: CoffeeState,
    login: LoginState,
    token: TokenState,
}

const rootReducer: Reducer<any, Action> = (state: State, action: any) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;

        default: {
            const combineReducer = combineReducers({
                coffee: CoffeeReducer,
                login: LoginReducer,
                token: TokenReducer,
            });

            return combineReducer(state, action);
        }
    }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
