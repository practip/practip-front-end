import Ember from 'ember';
// import ChallengeValidations from '../../../validations/challenge';

export default Ember.Controller.extend({
  // ChallengeValidations,
  redirectRoute: 'instrument.challenge.video',

  actions: {
    async saveEdits(changeset) {
      await changeset.save();

      this.transitionToRoute('instrument.challenge.video');
    },

    closeModalDialog() {
      this.transitionToRoute(this.get('redirectRoute'))
    }
  }
});
