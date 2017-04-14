import Ember from 'ember';

export default Ember.Controller.extend({
  video: {},

  actions: {
    submitVideo() {
      const post = this.store.createRecord('post');

      post.save();
      this.transitionToRoute('instrument.challenge.video');
    }
  }
});
