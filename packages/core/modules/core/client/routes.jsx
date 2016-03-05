import React from 'react';
import { mount } from 'react-mounter';
// load Layout and Welcome React components
import { MainLayout } from './components/main-layout.jsx';
import { Home } from './components/home.jsx';

/*global FlowRouter*/

FlowRouter.route("/", {
  name: "Main",
  action(params) {
    mount(MainLayout, {
      content: <Home />
    });
  }
});