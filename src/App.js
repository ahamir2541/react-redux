import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './Store'
import Count from './Components/Count'
import Control from './Components/Control'

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div>
          <h1>hello </h1>
          <Count />
          <Control/>
        </div>
      </Provider>
    );
  }
}

export default App;

// state
//     action , ruducers

// react components
//       child compoents... 

// react redux connect 
//      proverder compoents
//          store
//          app compoents

// if we need data 
// mapStateToProps(state) return object

// if we want to dispatch same action
// mapDispatchToProps(dispatch) return object

// connet(mapStateToProps, mapDispatchToProps)(components)