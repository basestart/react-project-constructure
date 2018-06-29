import {createAction, handleActions} from 'redux-actions';

const addTodo2 = createAction('ADDTODO2');

export const actions = {
    addTodo2
}

export default handleActions ({
    [addTodo2]: (state, {payload}) => ({
        ...state,
        count2: state.count2 + payload
    })
}, {
    count2: 0
})