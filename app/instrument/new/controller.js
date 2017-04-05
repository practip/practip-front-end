import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    async submitForm() {
      const instrument = this.store.createRecord('instrument', this.formValues);

      await instrument.save();

      this.set('formValues', {});
      this.transitionToRoute('instrument');
    }
  }
});
