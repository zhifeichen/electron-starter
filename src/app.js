import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';

const remote = require('electron').remote;

export default class extends Component {
  constructor() {
    super();
    this.defaultProps = {
      color: '#cc7f29',
      theme: 'light',
    };
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
        <TitleBar title="My Windows Application" controls onCloseClick={this.close}/>
        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
      </Window>
    );
  }
}
