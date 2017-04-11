import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  async submitChallenge() {
    const challenge = this.store.createRecord('challenge', this.formValues);

    await challenge.save();

    this.set('formValues', {});
    this.transitionToRoute('challenge');
  }
});
