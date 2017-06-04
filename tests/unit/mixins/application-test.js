import Ember from 'ember';
import ApplicationMixin from 'practip/mixins/application';
import { module, test } from 'qunit';

module('Unit | Mixin | application');

// Replace this with your real tests.
test('it works', function(assert) {
  let ApplicationObject = Ember.Object.extend(ApplicationMixin);
  let subject = ApplicationObject.create();
  assert.ok(subject);
});
