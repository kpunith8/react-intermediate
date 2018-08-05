import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';
import { ToggleRenderPropsChildren, Modal } from './utilities';
import styled from 'styled-components';

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
        <MarginTop />
        <ToggleRenderPropsChildren>
          {
            ({ enableToggle, toggleButton }) => (
              <Fragment>
                <button onClick={toggleButton}> Show / Hide </button>
                <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
                  {enableToggle && Header}
                </Transition>
              </Fragment>
            )
          }
        </ToggleRenderPropsChildren>

      </div>
    );
  }
}

const Header = styles => <h2 style={{ ...styles }}>Show me</h2>;

const MarginTop = styled.div`
  margin-top: 10px;
`;

export default App;
