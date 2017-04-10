import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard');

  this.route('instrument', { path: '/instruments' }, function() {
    // loads challenge index based on instrument's slug id
    this.route('challenge', { path: '/:instrument_id' }, function() {
      this.route('new');
      this.route('edit');
      this.route('video');
    });

    this.route('new');
    this.route('edit');
  });

  this.route('login', function() {
    this.route('register');
  });

  this.route('user-profile', function() {
    this.route('edit');
  });
  this.route('challenge');
});

export default Router;
