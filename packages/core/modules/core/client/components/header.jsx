import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import Colors from 'material-ui/lib/styles/colors';
import FlashOn from 'material-ui/lib/svg-icons/image/flash-on';
import RestaurantMenu from 'material-ui/lib/svg-icons/maps/restaurant-menu';
import LocalHospital from 'material-ui/lib/svg-icons/maps/local-hospital';

import FontIcon from 'material-ui/lib/font-icon';

import _ from 'lodash';


export const Header = React.createClass({

  getInitialState() {
    return {
      health: 11,
      food: 14,
      energy: 7,
      money: 1834334
    };
  },

  componentDidMount() {
    this.interval = setInterval(this.tick, 100);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  addToMax(val, inc, max) {
    val += inc;
    if (max && val > max) val = max;
    return val;
  },

  tick() {
    let { health, food, energy, money } = this.state;
    health = this.addToMax(health, 0.3, 100);
    food = this.addToMax(food, 0.6, 100);
    energy = this.addToMax(energy, 0.2, 50);
    this.setState({ health, food, energy, money });
  },

  formatMoney(n) {
    return n.toFixed(2).replace(/./g, (c, i, a) => {
      return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
  },

  render() {

    let style = {
      backgroundColor: Colors.grey900
    };

    let styleTwo = {
      background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://upload.wikimedia.org/wikipedia/commons/7/79/US_Woodland_pattern.svg)  no-repeat center center fixed',
      backgroundSize: 'cover'
    }

    let { health, food, energy, money } = this.state;

    return (
      <AppBar style={ styleTwo } className="header" showMenuIconButton={false}>
        <div className="flex-container middle-aligned">
          <div style={{ flexGrow: '3' }} className="flex-item stat">
            <FontIcon color={Colors.yellow500} className="fa fa-usd"></FontIcon>
            <h2 style={{ display: 'inline' }}>&nbsp;&nbsp;{ this.formatMoney(money) }</h2>
          </div>
          <div className="flex-item stat">
            <LocalHospital color={Colors.red800} /><br />
            { _.round(health) }/100
          </div>
          <div className="flex-item stat">
            <RestaurantMenu color={Colors.green500} /><br />
            { _.round(food) }/100
          </div>
          <div className="flex-item stat">
            <FlashOn color={Colors.yellow500} /><br />
            { _.round(energy) }/50
          </div>
        </div>
      </AppBar>
    ) 
  }

});
