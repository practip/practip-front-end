import Ember from 'ember';
import formValidations from '../../../validations/form';

export default Ember.Controller.extend({
  formValidations,

  formValues: {},

  actions: {
    async submitChallenge(changeset) {
      await changeset.validate().then(() => {
        if(changeset.get('isValid')) {
          changeset.save();

          const challenge = this.store.createRecord('challenge', this.formValues);
          challenge.set('instrument', this.instrument);

          challenge.save();

          this.set('formValues', {});
          this.transitionToRoute('instrument.challenge');
        } else {
          alert('One or more fields are empty. Please fill in all forms to continue.');
        }
      })
    }
  }
});
