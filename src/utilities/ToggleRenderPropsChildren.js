import React, { Component } from 'react';

class ToggleRenderPropsChildren extends Component {
  state = {
    enableToggle: false,
  }

  toggleButton = () => {
    this.setState({ enableToggle: !this.state.enableToggle });
  }

  render() {
    const { children } = this.props;

    return children({
      enableToggle: this.state.enableToggle,
      toggleButton: this.toggleButton
    });

  }
}

export default ToggleRenderPropsChildren;
