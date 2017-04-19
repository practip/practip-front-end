import Ember from 'ember';
import RedirectOnClose from '../redirect-on-close';

export default Ember.Controller.extend(RedirectOnClose, {
  formValues: {},

  actions: {
    async submitVideo(changeset) {
      await changeset.validate().then(() => {
        if(changeset.get('isValid')) {
          changeset.save();
          const [_, youtubeId] = this.formValues.videoUrl.match(/(?:https:\/\/www.youtube.com\/watch\?v=)(.+)/);

          const post = this.store.createRecord('post', this.formValues);
          post.set('youtubeId', youtubeId);
          post.set('challenge', this.model);

          post.save();
          this.transitionToRoute('instrument.challenge.video');
        } else {
          alert('One or more fields are empty. Please fill in all forms to continue.');
        }
      })
    }
  }
});
