# `ui-mixin-helpers`

> A set of mixins that are useful for building Ember components

## Installation ##


* change directories to your project folder
* `ember install:addon ui-number-input`

That's it, it's available to your components through the standard **Mixin** syntax:

````javascript

## Mixins Included ##

Installing this addon will allow you to use the following Mixins in your components/views:

- `InputStatusMixin`
	manages all the functionality around *status* rules and styling. This mixin has the following dependencies:
	
	- `classNameBindings` - expects to have 'statusClass' and 'statusVisualze' listed in the bindings array
	- `status`, `statusIsDefault`, `statusVisualize` become reserved names
- `InputCorrectionMixin`
	Adds *auto-correction* rules functionality

	- `defaultCorrectionRules` will be blank unless the implementing component sets this themselves (blank may be the desired state)
	- `correctionRules` is exposed as a property so that rules can be added by containing view at run time

- `InputAnimationMixin`
- `UiEventListenerMixin`

