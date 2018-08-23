import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { default as reducer } from './store/store';
import { injectReducer } from 'src/store';
import * as components from './components';
import { Link, Route, Switch } from 'react-router-dom';
const { Sider, Content } = Layout;

export default class Home extends Component {
    async componentDidMount() {
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
                <Sider width={200} style={{ background: '#fff', height: '100%'}} height={100}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{height: '100%'}}
                    >
                        <Menu.Item key='1'><Link to={`/Home/page1`}> page1</Link></Menu.Item>
                        <Menu.Item key='2'><Link to={`/Home/page2`}> page2</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Content
                    style={{
                        padding: '0 24px',
                        minHeight: 280
                    }}
                >
                    <Switch>
                        <Route exact path={`/`} component={components.Page1} key='page1'/>
                        <Route exact path={`/Home`} component={components.Page1} key='page12'/>
                        <Route exact path={`/Home/page1`} component={components.Page1} key='page13'/>
                        <Route exact path={`/Home/page2`} component={components.Page2} key='page2'/>
                    </Switch>
                </Content>
            </Layout>
        );
    }
}

export const Icon = 'appstore';
