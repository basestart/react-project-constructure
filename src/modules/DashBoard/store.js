import { createAction, handleActions } from 'redux-actions';

const addTodoText = createAction('addtodo');

export const actions = {
    addTodoText
};

export default handleActions(
    {
        [addTodoText]: (state, { payload }) => ({
            ...state,
            todos: [...state.todos, payload]
        })
    },
    {
        todos: []
    }
);
