import { handleActions, combineActions } from 'redux-actions';
import { actions as page1Actions, default as page1Reducer } from './page1';
import { actions as page2Actions, default as page2Reducer } from './page2';
const objToArr = (obj = {}) => Object.keys(obj).map(key => obj[key]);

export const actions = {
    ...page1Actions,
    ...page2Actions
};

export default handleActions(
    {
        [combineActions(...objToArr(page1Actions))]: (state = {}, action) => ({
            ...state,
            page1: page1Reducer(state.page1, action)
        }),
        [combineActions(...objToArr(page2Actions))]: (state = {}, action) => ({
            ...state,
            page2: page2Reducer(state.page2, action)
        })
    },
    {}
);
