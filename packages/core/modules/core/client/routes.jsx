import React from 'react';
import { mount } from 'react-mounter';
// load Layout and Welcome React components
import { MainLayout } from './components/main-layout.jsx';
import { Profile } from '../../profile/client/components/profile.jsx';
import { Capital } from '../../capital/client/components/capital.jsx';
import { Army } from '../../army/client/components/army.jsx';
import { Sanctions } from '../../sanctions/client/components/sanctions.jsx';
import { Fight } from '../../fight/client/components/fight.jsx';

/*global FlowRouter*/

FlowRouter.route("/", {
  name: "Profile",
  action(params) {
    mount(MainLayout, {
      content: <Profile />
    });
  }
});

FlowRouter.route("/profile", {
  name: "Profile",
  action(params) {
    mount(MainLayout, {
      content: <Profile />
    });
  }
});

FlowRouter.route("/capital", {
  name: "Capital",
  action(params) {
    mount(MainLayout, {
      content: <Capital />
    });
  }
});

FlowRouter.route("/army", {
  name: "Army",
  action(params) {
    mount(MainLayout, {
      content: <Army />
    });
  }
});

FlowRouter.route("/sanctions", {
  name: "Sanctions",
  action(params) {
    mount(MainLayout, {
      content: <Sanctions />
    });
  }
});

FlowRouter.route("/fight", {
  name: "Fight",
  action(params) {
    mount(MainLayout, {
      content: <Fight />
    });
  }
});