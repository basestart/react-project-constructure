import React, { Component } from 'react';
import { Button } from 'antd';
import { actions } from '../store/page2';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => {
    let { Home: { page2: { count2 } = {} } = {} } = state;
    return { count2 };
}, dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
})
export default class Page2 extends Component {
    handleAdd() {
        let {
            actions: { addTodo2 }
        } = this.props;
        addTodo2(1);
    }

    render() {
        let { count2 } = this.props;
        return (
            <div>
                <h1>page2--二级state</h1>
                <Button onClick={this.handleAdd.bind(this)}> + </Button>
                <p>{count2}</p>
            </div>
        );
    }
}

