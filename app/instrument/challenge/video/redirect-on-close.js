import Ember from 'ember';

export default Ember.Mixin.create({
  redirectRoute: 'instrument.challenge.video',

  actions: {
    closeModalDialog() {
      this.transitionToRoute(this.get('redirectRoute'))
    }
  }
});
