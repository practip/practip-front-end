import Ember from 'ember';
import InstrumentChallengeVideoRedirectOnCloseMixin from 'practip/mixins/instrument/challenge/video/redirect-on-close';
import { module, test } from 'qunit';

module('Unit | Mixin | instrument/challenge/video/redirect on close');

// Replace this with your real tests.
test('it works', function(assert) {
  let InstrumentChallengeVideoRedirectOnCloseObject = Ember.Object.extend(InstrumentChallengeVideoRedirectOnCloseMixin);
  let subject = InstrumentChallengeVideoRedirectOnCloseObject.create();
  assert.ok(subject);
});
