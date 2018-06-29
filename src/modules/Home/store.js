import { createAction, handleActions } from 'redux-actions';

export const addTodo = createAction('ADD');
export const subTodo = createAction('ADD');

export const actions = {
    addTodo,
    subTodo
};

export default handleActions(
    {
        [addTodo]: (state, { payload }) => {
            return {
                count: state.count + payload.count
            };
        },
        [subTodo]: (state, { payload }) => ({
            count: state.count - payload.count
        })
    },
    {
        count: 0
    }
);
