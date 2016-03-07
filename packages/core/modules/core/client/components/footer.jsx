import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Colors from 'material-ui/lib/styles/colors';
import { MainLayout } from './main-layout.jsx';


export class Footer extends React.Component {
  constructor(props) {
    super(props);
  };

  onTabChange(obj) {
    FlowRouter.go('/'+obj.props.label.toLowerCase());
  };

  onSlideChange(value) {
    this.value = value;
  };


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
        <Tabs onChange={this.onSlideChange} tabItemContainerStyle={ tabsStyle } inkBarStyle={ inkBarStyle } value={this.value}>
          <Tab onActive={ this.onTabChange } label="Profile" value={'Profile'} />
          <Tab onActive={ this.onTabChange } label="Capital" value={'Capital'} />
          <Tab onActive={ this.onTabChange } label="Army" value={'Army'} />
          <Tab onActive={ this.onTabChange } label="Sanctions" value={'Sanctions'} />
          <Tab onActive={ this.onTabChange } label="Fight" value={'Fight'} />
        </Tabs>
      </div>
    );
  };
}

