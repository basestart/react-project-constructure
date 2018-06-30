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
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%' }}
                    >
                        {Object.keys(components).map((comp, index) => (
                            <Menu.Item key={index + 1}>
                                <Link key={comp} to={`/Home/${comp}`}>
                                    {comp}
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Content
                    style={{
                        padding: '0 24px',
                        minHeight: 280
                    }}
                >
                    <Switch>
                        {Object.keys(components).map(comp => (
                            <Route
                                exact
                                path={`/Home/${comp}`}
                                component={components[comp]}
                                key={comp}
                            />
                        ))}
                    </Switch>
                </Content>
            </Layout>
        );
    }
}

export const Icon = 'appstore';
