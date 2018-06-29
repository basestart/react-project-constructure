import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './store';
import { default as reducer } from './store';
import { injectReducer } from '../../store';

class Home extends Component {
    componentDidMount() {
        injectReducer('Home', reducer);
    }
    handleAdd() {
        let { addTodo } = this.props;
        addTodo({ count: -1 });
    }
    handleSub() {
        let { subTodo } = this.props;
        subTodo({ count: 1 });
    }
    render() {
        let { count } = this.props;
        return (
            <div>
                <Button onClick={this.handleAdd.bind(this)}>+</Button> &nbsp;
                <Button onClick={this.handleSub.bind(this)}>-</Button>
                <br />
                <span>{count}</span>
                <br />
                <Input />
            </div>
        );
    }
}

function mapStateToProps(state) {
    let { Home: { count } = {} } = state;
    return {
        count
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export const Icon = 'appstore';
