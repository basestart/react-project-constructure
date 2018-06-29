import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header as TopMenu } from './common';
import { Provider } from 'react-redux';
import { default as store } from './store';
import { Layout } from 'antd';
import './App.css';
const { Header, Footer, Content } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount() {
        const { default: Home } = await import('./modules/Home');
        const { default: DashBoard } = await import('./modules/DashBoard');
        this.setState({
            Home,
            DashBoard
        });
    }
    render() {
        let { Home, DashBoard } = this.state;
        return (
            <Provider store={store}>
                <Router>
                    <Layout style={{display: 'flex'}}>
                        <Header className="header">
                            <div className="logo" />
                            <TopMenu />
                        </Header>
                        <Content style={{ padding: '0 50px', flex: 1 }}>
                            {Home && <Route exact path="/" component={Home} />}
                            {Home && <Route path="/Home" component={Home} />}
                            {DashBoard && (
                                <Route
                                    path="/DashBoard"
                                    component={DashBoard}
                                />
                            )}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            powered by <a href="https://github.com/fridego/react-project-constructure" target="blank">fridego</a>
                        </Footer>
                    </Layout>
                </Router>
            </Provider>
        );
    }
}

export default App;
