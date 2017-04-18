import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePost(post) {
      if(confirm('Are you sure you want to delete this post?')) {
        post.destroyRecord();
      }
      else {
        this.transitionToRoute('instrument.challenge.video')
      }
    }
  }
});
