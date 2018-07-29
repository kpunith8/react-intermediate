import React, { Component } from 'react';

class ToggleRenderProps extends Component {
  state = {
    enableToggle: false,
  }

  toggleButton = () => {
    this.setState({ enableToggle: !this.state.enableToggle });
  }

  render() {
    const { render } = this.props;

    return (
      <div>
        {render({
          enableToggle: this.state.enableToggle,
          toggleButton: this.toggleButton
        })}
      </div>
    );
  }
}

export default ToggleRenderProps;