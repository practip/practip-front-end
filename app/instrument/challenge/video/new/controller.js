import Ember from 'ember';
import RedirectOnClose from '../redirect-on-close';

import {
  validatePresence,
  validateFormat
} from 'ember-changeset-validations/validators';

const youtubeVidRegex = /(?:https:\/\/www.youtube.com\/watch\?v=)(.+)/i;

export default Ember.Controller.extend(RedirectOnClose, {
  formValues: {},

  validator: {
    title: validatePresence(true),
    videoUrl: [
      validatePresence(true),
      validateFormat({ regex: youtubeVidRegex }),
    ],
    description: validatePresence(true),
  },

  actions: {
    async submitVideo(changeset) {
      await changeset.validate().then(() => {
        if(changeset.get('isValid')) {
          changeset.save();
          // debugger;
          const [_, youtubeId] = this.formValues.videoUrl.match(youtubeVidRegex);

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
