import { createAction, handleActions } from 'redux-actions';

const addTodo1 = createAction('ADDTODO1');

export const actions = {
    addTodo1
};

export default handleActions(
    {
        [addTodo1]: (state, { payload }) => ({
            ...state,
            count1: state.count1 + payload
        })
    },
    {
        count1: 0
    }
);
