import React, {Component} from 'react';
import {Button} from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../store/page1';

class Page1 extends Component {

    handleAdd () {
        let {actions: {addTodo1}} = this.props;
        addTodo1(1);
    }

    render () {
        let {count1} = this.props;
        return (
            <div>
                <h1>page1</h1>
                <Button onClick={this.handleAdd.bind(this)}> + </Button>
                <p>
                {count1}
                </p>
            </div>
        )
    }
}

function mapStateToProps (state) {
    let {Home:{page1:{count1} = {}} = {}} = state;
    return {count1}
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page1)

Page1.propTypes = {
    count1: PropTypes.number
}