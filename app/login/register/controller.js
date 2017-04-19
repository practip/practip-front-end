import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    async submit(changeSet) {
      changeSet.save();

      const user = this.store.createRecord('user', this.model);

      await user.save();

      this.transitionToRoute('login');
    }
  }
});
