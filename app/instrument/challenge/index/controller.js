import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteChallenge(challenge) {
      if(confirm('Are you sure you want to delete this challenge?')) {
        challenge.destroyRecord();
      }
      else {
        this.transitionToRoute('instrument.challenge')
      }
    }
  }
});
