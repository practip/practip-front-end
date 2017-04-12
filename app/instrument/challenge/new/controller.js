import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    async submitChallenge() {
      const challenge = this.store.createRecord('challenge', this.formValues);
      challenge.set('instrument', this.instrument);

      await challenge.save();

      this.set('formValues', {});
      this.transitionToRoute('instrument.challenge');
    }
  }
});
