import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');
/**
 * Helps to separate things in the DOM, instead of keeping under root elements, it created it's own element
 */
class Portal extends Component {
  constructor(props) {
    super(props);

    this.element = document.createElement('div');
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.element);
  }

  componentWillUnmount = () => {
    portalRoot.removeChild(this.element);
  }

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.element);
  }
}

export default Portal;
