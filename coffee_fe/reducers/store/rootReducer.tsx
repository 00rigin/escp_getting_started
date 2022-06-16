import { combineReducers, Reducer, Action } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import CoffeeReducer, {CoffeeState} from "../coffeeReducer";
import LoginReducer, {LoginState} from "../loginReducer";

export interface State {
    coffee: CoffeeState,
    login: LoginState
}

const rootReducer: Reducer<any, Action> = (state: State, action: any) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;

        default: {
            const combineReducer = combineReducers({
                coffee: CoffeeReducer,
                login: LoginReducer,
            });

            return combineReducer(state, action);
        }
    }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
