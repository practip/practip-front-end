import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    confirmWithUser() {
      var response = confirm('Are you sure you want to delete this challenge?');
      return response;
    },

    deleteChallenge(challenge) {
      const response = confirmWithUser();
      if(response) {
        challenge.destroyRecord()
      }
      else {
        this.transitionToRoute('instrument.challenge');
      }
    }
    // deleteChallenge(challenge) {
    //
    //   if(alert = true) {
    //     challenge.destroyRecord();
    //   }
    //
    //   else {
    //     this.transitionToRoute('instrument.challenge')
    //   }
    // }
  }
});
