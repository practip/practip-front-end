import Ember from 'ember';
import RedirectOnClose from '../redirect-on-close';
import formValidations from '../../../../validations/form';

export default Ember.Controller.extend(RedirectOnClose, {
  formValidations,

  actions: {
    async submitComment() {
      await changeset.validate().then(() => {
        if(changeset.get('isValid')) {
          const comment = this.store.createRecord('comment', this.formValues);
          comment.set('video', this.video);

          comment.save();

          this.set('formValues', {});
          this.transitionToRoute('instrument.challenge.video');
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
