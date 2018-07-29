import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    enableToggle: false,
  }

  toggleButton = () => {
    this.setState({ enableToggle: !this.state.enableToggle });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleButton}> Show/Hide </button>
        {this.state.enableToggle && this.props.children}
      </div>
    );
  }
}

export default Toggle;