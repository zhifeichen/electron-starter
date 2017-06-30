import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';

const remote = require('electron').remote;

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'dark',
  };

  constructor(props) {
    super(props);
    this.state = {  isMaximized: false };
  }

  minimize() {
    remote.getCurrentWindow().minimize();
  }

  maximize() {
    remote.getCurrentWindow().maximize();
  }

  unmaximize() {
    remote.getCurrentWindow().unmaximize();
  }

  toggleMaximize() {
    this.setState({ isMaximized: !this.state.isMaximized });
    if(this.state.isMaximized) {
      this.maximize();
    } else {
      this.unmaximize();
    }
  }

  restore() {
    remote.getCurrentWindow().restore();
  }

  close() {
    const win = remote.getCurrentWindow();
    win.close();
  }

  render() {
    return (
      <Window
        color={this.props.color}
        theme={this.props.theme}
        chrome
        height="100%"
        padding="12px"
      >
        <TitleBar
          title="My Windows Application"
          controls
          onCloseClick={this.close}
          onMinimizeClick={this.minimize}
          onMaximizeClick={this.toggleMaximize}
          onRestoreDownClick={this.toggleMaximize}
        />
        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
      </Window>
    );
  }
}
