import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    this._super(...arguments);

    controller.set('post', this.modelFor('instrument.challenge.video.comments'));
  }
});
