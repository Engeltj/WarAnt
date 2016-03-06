import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Colors from 'material-ui/lib/styles/colors';

export const Footer = React.createClass({
  render() {

    let tabStyle = {
      position: 'fixed',
      bottom: '0',
      width: '100%'
    }

    let tabsStyle = {
      backgroundColor: Colors.grey900
    }

    let inkBarStyle = {
      backgroundColor: Colors.lime900
    }

    return (
      <div style={ tabStyle }>
        <Tabs tabItemContainerStyle={ tabsStyle } inkBarStyle={ inkBarStyle }>
          <Tab label="Investments" />
          <Tab label="Units" />
          <Tab label="Missions" />
          <Tab label="Battle" />
          <Tab label="Profile" />
        </Tabs>
      </div>
    );
  }
});
