import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Headers, Footers } from 'src/common';
import { default as store } from 'src/store';
import 'src/App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount() {
        const { default: Home } = await import('src/modules/Home');
        const { default: DashBoard } = await import('src/modules/DashBoard');
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
                    <div style={{height: '80%'}}>
                        <Headers/>
                        {Home && <Route path='/' exact component={Home}/>}
                        {Home && <Route path='/home' component={Home}/>}
                        {DashBoard && <Route path='/dashboard' component={DashBoard}/>}
                        <Footers/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
