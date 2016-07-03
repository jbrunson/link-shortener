import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/link_create';
import { Links } from '../imports/collections/links';

// NOTES - challenges
// Need a way to store links
// Have to figure out a way to "redirect" a user from a shortened URL to the original one
// Have to record a click whenever a user gets redirected

const App = () => {
  return (
    <div>
      <Header />
      <LinkCreate />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
}); 