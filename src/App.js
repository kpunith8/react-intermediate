import React, { Component, Fragment } from 'react';
import { ToggleRenderPropsChildren, Modal } from './utilities';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> Intermediate React - Modal Sample</h2>
        <ToggleRenderPropsChildren>
          {
            ({ enableToggle, toggleButton }) => (
              <Fragment>
                <button onClick={toggleButton}> Open Modal </button>
                <Modal enableToggle={enableToggle} toggleButton={toggleButton}>
                  <h1> Hi I'm inside modal </h1>
                </Modal>
              </Fragment>
            )
          }
        </ToggleRenderPropsChildren>
      </div>
    );
  }
}

export default App;
