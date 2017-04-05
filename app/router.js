import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('challenge', function() {
    this.route('create');
    this.route('edit');
    this.route('video');
  });
  this.route('dashboard');
  this.route('instrument');
  this.route('login', function() {
    this.route('register');
  });

  this.route('user-profile', function() {
    this.route('edit');
  });
});

export default Router;
