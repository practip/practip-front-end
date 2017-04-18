import Ember from 'ember';
import RedirectOnClose from '../redirect-on-close';

export default Ember.Controller.extend(RedirectOnClose, {
  actions: {
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
