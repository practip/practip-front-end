import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    async login(changeSet) {
      changeSet.save();

      const session = this.get('session');

      await session.authenticate('authenticator:jwt', {
        identification: this.get('model.username'),
        password: this.get('model.password'),
      });
    }
  }
});
