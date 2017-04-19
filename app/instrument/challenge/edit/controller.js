import Ember from 'ember';
import formValidations from '../../../validations/form';

export default Ember.Controller.extend({
  formValidations,

  actions: {
    async saveEdits(changeset) {
      changeset.validate().then(() => {
        if(changeset.get('isValid')) {
          changeset.save();

          this.transitionToRoute('instrument.challenge');
        } else {
          alert('One or more fields are empty. Please fill in all forms to continue.');
        }
      })
    }
  }
});
