import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteChallenge(challenge) {
      challenge.destroyRecord();
    }
  }
});
