import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { modules } from './modules';
import { createStore } from 'redux';
import { Header, Content } from './share';
import { Provider } from 'react-redux';

let store = createStore(function() {}, {});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <Content modules={modules} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
