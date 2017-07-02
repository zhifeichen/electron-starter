import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Window, TitleBar, Text } from 'react-desktop/windows';

const remote = require('electron').remote;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMaximized: false };
    this.minimize = this.minimize.bind(this);
    this.maximize = this.maximize.bind(this);
    this.unmaximize = this.unmaximize.bind(this);
    this.toggleMaximize = this.toggleMaximize.bind(this);
    this.restore = this.restore.bind(this);
    this.close = this.close.bind(this);

    this.win = remote.getCurrentWindow();
  }

  minimize() {
    this.win.minimize();
  }

  maximize() {
    this.win.maximize();
  }

  unmaximize() {
    this.win.unmaximize();
  }

  toggleMaximize() {
    if (!this.state.isMaximized) {
      this.maximize();
    } else {
      this.unmaximize();
    }
    this.setState({ isMaximized: !this.state.isMaximized });
  }

  restore() {
    this.win.restore();
  }

  close() {
    this.win.close();
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
          isMaximized={this.state.isMaximized}
          theme={this.props.theme}
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

App.propTypes = {
  color: PropTypes.string,
  theme: PropTypes.string,
};

App.defaultProps = {
  color: '#cc7f29',
  theme: 'light',
};

export default App;
