import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {Layout, Welcome} from './app.jsx';

FlowRouter.route("/", {
  name: "Main",
  action(params) {
    renderMainLayoutWith(<Home />);
  }
});


function renderMainLayoutWith(component) {
    mount(MainLayout, {
      header: <Header />,
      component: component,
      footer: <Footer />
    });
}