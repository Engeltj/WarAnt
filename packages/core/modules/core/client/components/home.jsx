import React from 'react';
import Layout from 'react-layout';
import Colors from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';


export const Home = React.createClass({
  render() {

    let style = {
      backgroundColor: Colors.yellow500,
      height: 'calc(100vh - 64px - 48px)'
    };

    return (
      <div style={style}>

        {/*<Layout className="flex-container" layoutWidth={window.innerWidth} layoutHeight={32}>
          <Layout layoutWidth="flex">
            1
          </Layout>
          <Layout layoutWidth="flex">
            2
          </Layout>
          <Layout layoutWidth="flex">
            3
          </Layout>
        </Layout> */}


      </div>
    )
  }
});

