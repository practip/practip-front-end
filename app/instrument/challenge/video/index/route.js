import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    this._super(...arguments);

    controller.set('challenge', this.modelFor('instrument.challenge.video'));
  }
});
