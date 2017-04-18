import Ember from 'ember';
import RedirectOnClose from '../redirect-on-close';

export default Ember.Controller.extend(RedirectOnClose, {
  formValues: {},

  actions: {
    submitVideo(changeset) {
      changeset.save();
      const [_, youtubeId] = this.formValues.videoUrl.match(/(?:https:\/\/www.youtube.com\/watch\?v=)(.+)/);

      const post = this.store.createRecord('post', this.formValues);
      post.set('youtubeId', youtubeId);
      post.set('challenge', this.model);

      post.save();
      this.transitionToRoute('instrument.challenge.video');
    }
  }
});
