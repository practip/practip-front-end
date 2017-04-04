import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('instrument-slug', { path: '/instrument-slug' }, function() {
    this.route('challenge-id');
  })
});

export default Router;
