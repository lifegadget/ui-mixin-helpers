import Ember from 'ember';
import UiEventListenerMixin from 'ui-mixin-helpers/mixins/ui-event-listener';

module('UiEventListenerMixin');

// Replace this with your real tests.
test('it works', function() {
  var UiEventListenerObject = Ember.Object.extend(UiEventListenerMixin);
  var subject = UiEventListenerObject.create();
  ok(subject);
});
