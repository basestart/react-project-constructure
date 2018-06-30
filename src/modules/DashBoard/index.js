import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectReducer } from 'src/store';
import { bindActionCreators } from 'redux';
import { default as reducers, actions } from './store';
import { Layout, Input } from 'antd';
const { Content } = Layout;

class DashBoard extends Component {
    componentDidMount() {
        injectReducer('DashBoard', reducers);
    }

    handleSearch(e) {
        let {
            actions: { addTodoText }
        } = this.props;
        addTodoText(e.target.value);
        e.target.value = '';
    }

    render() {
        let { todos } = this.props;
        return (
            <Layout
                style={{
                    padding: '24px 0',
                    background: '#fff'
                }}
            >
                <Content
                    style={{
                        padding: '0 24px',
                        minHeight: 280
                    }}
                >
                    <h2>DashBoard--一级state</h2>
                    <p>输入内容后回车</p>
                    <Input onPressEnter={this.handleSearch.bind(this)} />
                    <div>
                        <ul>{todos.map(todo => <li>{todo}</li>)}</ul>
                    </div>
                </Content>
            </Layout>
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
