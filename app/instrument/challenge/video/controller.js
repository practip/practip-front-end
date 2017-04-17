import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePost(post) {
      post.destroyRecord();
    }
  }
});
