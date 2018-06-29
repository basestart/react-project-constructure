import {handleActions, createAction} from 'redux-actions';

const getCommonData = createAction('getPub');

export default handleActions ({
    [getCommonData]: (state, {payload}) => ({
        ...state,
        public: payload.public
    })
}, {
    public: true
})