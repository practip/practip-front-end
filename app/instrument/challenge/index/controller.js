import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Controller.extend({
  currentUser: service,

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
