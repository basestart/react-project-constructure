import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { actions } from '../store/page2';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Page2 extends Component {
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

function mapStateToProps(state) {
    let { Home: { page2: { count2 } = {} } = {} } = state;
    return { count2 };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page2);

Page2.propTypes = {
    count2: PropTypes.number
};
