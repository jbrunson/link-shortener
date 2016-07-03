import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'links.insert': (url) => {
    console.log('attempting to save', url)
  }
});

export const links = new Mongo.Collection('links');