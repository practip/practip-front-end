import Ember from 'ember';
import RedirectOnClose from '../redirect-on-close';
import { validatePresence } from 'ember-changeset-validations/validators';

export default Ember.Controller.extend(RedirectOnClose, {
  formValues: {},
  redirectRoute: 'instrument.challenge.video',

  CommentValidator: {
    body: validatePresence(true)
  },

  actions: {
    closeModalDialog() {
      this.transitionToRoute(this.get('redirectRoute'))
    },

    async submitComment(changeset) {
      await changeset.validate().then(() => {
        if(changeset.get('isValid')) {
          changeset.save();
          const comment = this.store.createRecord('comment', this.formValues);

          comment.set('post', this.post);

          comment.save();

          this.set('formValues', {});
          this.transitionToRoute('instrument.challenge.video.comments');
        } else {
          alert('One or more fields are empty. Please fill in all forms to continue.');
        }
      })
    },

    deleteComment(comment) {
      if(confirm('Are you sure you want to delete this comment?')) {
        comment.destroyRecord();
      }
      else {
        this.transitionToRoute('instrument.challenge.video.comments')
      }
    }
  }
});
