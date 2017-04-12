import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    async saveEdits(changeset) {
      await changeset.save();

      this.transitionToRoute('instrument.challenge');
    }
  }
});
