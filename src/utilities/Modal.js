import React, { Component } from 'react';
import Portal from './Portal';
import styled from 'styled-components';
import { Card } from '../elements';
import { absolute } from './position';

class Modal extends Component {
  // Add toggleButton listener to Background so that we can close on clicking outside modal

  // Portal helps place an modal outside the root div
  render() {
    const { children, enableToggle, toggleButton } = this.props;

    return (
      <Portal>
        {enableToggle && (
          <ModalWrappper>
            <ModalCard>
              {children}
              <CloseButton onClick={toggleButton}>Close
              </CloseButton>
            </ModalCard>
            <Background />
          </ModalWrappper>
        )}
      </Portal>
    );
  }
}

const ModalWrappper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = Card.extend`
  position: relative;
  min-width: 600px;
  min-height: 480px;
  z-index: 10;
`;

const CloseButton = styled.button`
  ${absolute({
    y: 'top', x: 'right', yValue: '10px', xValue: '10px'
  })};
  border: none;
`;

const Background = styled.div`
  ${absolute({})};
  background: black;
  height: 100%;
  width: 100%;
  opacity: 0.5;
`;

export default Modal;