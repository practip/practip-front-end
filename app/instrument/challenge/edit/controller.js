import Ember from 'ember';
import ChallengeValidations from '../../../validations/challenge';

export default Ember.Controller.extend({
  ChallengeValidations,

  actions: {
    async saveEdits(changeset) {
      await changeset.save();

      this.transitionToRoute('instrument.challenge');
    }
  }
});
