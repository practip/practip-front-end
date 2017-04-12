import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('challenge');
  },

  setupController(controller) {
    this._super(...arguments);

    controller.set('instrument', this.modelFor('instrument.challenge'));
  }
});
