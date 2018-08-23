import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../store/page1';

@connect(state => {
    let { Home: { page1: { count1 } = {} } = {} } = state;
    return { count1 };
}, dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
})
export default class Page1 extends Component {
    handleAdd() {
        let {
            actions: { addTodo1 }
        } = this.props;
        addTodo1(1);
    }

    render() {
        let { count1 } = this.props;
        return (
            <div>
                <h1>page1--二级state</h1>
                <Button onClick={this.handleAdd.bind(this)}> + </Button>
                <p>{count1}</p>
            </div>
        );
    }
}

