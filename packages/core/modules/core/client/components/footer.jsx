import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import { pink500 } from 'material-ui/lib/styles/colors';

export const Footer = React.createClass({
  render() {
    return (
      <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
        <Tabs>
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
