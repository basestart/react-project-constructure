import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './common';
import { Provider } from 'react-redux';
import { default as store } from './store';

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
                    <div>
                        <Header />
                        {Home && <Route exact path="/" component={Home} />}
                        {Home && <Route path="/Home" component={Home} />}
                        {DashBoard && (
                            <Route path="/DashBoard" component={DashBoard} />
                        )}
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
