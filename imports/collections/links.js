import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'links.insert': (url) => {
    // Check if url is valid? 
    check(url, Match.Where(url => validUrl.isUri(url)));
  }
});

export const links = new Mongo.Collection('links');