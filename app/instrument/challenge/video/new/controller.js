import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    submitVideo() {
      const post = this.store.createRecord('post');
      const matches = this.formValues.videoUrl.match(/(?:https:\/\/www.youtube.com\/watch\?v=)|(?:https:\/\/youtu\.be\/)(.+)/);

      this.model.youtubeId = 'z6iKrjfgOyg';

      post.set('challenge', this.formValues);

      post.save();
      this.transitionToRoute('instrument.challenge.video');
    }
  }
});
