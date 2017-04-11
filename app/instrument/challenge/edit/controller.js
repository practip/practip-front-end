import Ember from 'ember';

export default Ember.Controller.extend({
  async saveEdits(changeset) {
    await changeset.save();

    this.transitionToRoute('challenge');
  }
});
