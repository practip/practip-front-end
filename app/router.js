import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', { path: '/' });

  this.route('instrument', { path: '/instruments' }, function() {
    this.route('challenge', { path: '/:instrument_id' }, function() {
      this.route('new');
      this.route('edit', { path: '/:challenge_id' });
      this.route('video', { path: '/challenges/:challenge_id' }, function() {
        this.route('edit', { path: '/:post_id/edit' });
        // this.route('edit');
        this.route('new');
        this.route('comments', { path: '/:post_id/comments' }, function() {});
      });
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
});

export default Router;
