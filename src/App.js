import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {modules} from './modules';
import {createStore} from 'redux';
import {Header, Content} from './share';
import {Provider} from 'react-redux';

let store = createStore(function(){}, {});

class App extends Component {
  constructor (props) {
    super(props);
    let {Home, DashBoard} = modules;
    this.state = {
      Home,
      DashBoard
    }
  }

  render() {
    let {Home, DashBoard} = this.state;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            {/* <Content modules={modules}/> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route path="/dashboard" component={DashBoard} />
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
