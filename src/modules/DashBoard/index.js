import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectReducer } from '../../store';
import { bindActionCreators } from 'redux';
import { default as reducers, actions } from './store';

class DashBoard extends Component {
    componentDidMount() {
        injectReducer('DashBoard', reducers);
    }
    render() {
        let { todos } = this.props;
        return (
            <div>
                <ul>{todos.map(todo => <li>{todo}</li>)}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { DashBoard: { todos = [] } = {} } = state;
    return {
        todos
    };
};

const mapDispatchToProps = dispatch => {
    return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashBoard);

export const Icon = 'mail';
