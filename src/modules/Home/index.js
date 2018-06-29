import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './store';
import { default as reducer } from './store';
import { injectReducer } from '../../store';
const { Sider, Content } = Layout;

class Home extends Component {
    componentDidMount() {
        injectReducer('Home', reducer);
    }
    render() {
        return (
            <Layout
            style={{
                padding: '24px 0',
                background: '#fff'
            }}
        >
            <Sider
                width={200}
                style={{ background: '#fff' }}
            >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                >
                        <Menu.Item key="1">
                            option1
                        </Menu.Item>
                        <Menu.Item key="2">
                            option2
                        </Menu.Item>
                        <Menu.Item key="3">
                            option3
                        </Menu.Item>
                        <Menu.Item key="4">
                            option4
                        </Menu.Item>
                </Menu>
            </Sider>
            <Content
                style={{
                    padding: '0 24px',
                    minHeight: 280
                }}
            >
                Content
            </Content>
        </Layout>
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
