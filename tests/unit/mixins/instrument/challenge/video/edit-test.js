import Ember from 'ember';
import InstrumentChallengeVideoEditMixin from 'practip/mixins/instrument/challenge/video/edit';
import { module, test } from 'qunit';

module('Unit | Mixin | instrument/challenge/video/edit');

// Replace this with your real tests.
test('it works', function(assert) {
  let InstrumentChallengeVideoEditObject = Ember.Object.extend(InstrumentChallengeVideoEditMixin);
  let subject = InstrumentChallengeVideoEditObject.create();
  assert.ok(subject);
});
