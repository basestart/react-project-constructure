import { createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { default as rootReducer } from 'src/common/store';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = window.config || {};

const store = createStore(
    makeRootReducer({}),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

store.asyncReducers = {};

export function injectReducer(key, reducer) {
    if (store.asyncReducers[key]) return;
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
}

function makeRootReducer(asyncReducers) {
    return combineReducers({
        rootReducer,
        ...asyncReducers
    });
}

export default store;
