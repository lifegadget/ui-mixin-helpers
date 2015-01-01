# `ui-mixin-helpers`

> A set of mixins that are useful for building Ember components

This mixin is meant to be used in conjunction with user interface components. You may use this freely with your 
own component development or if you're interested in the UI components themselves you can see a few examples of 
UI components that leverage this addon:

- [`ui-text-input`]() - an HTML text widget
- [`ui-number-input`](https://github.com/lifegadget/ui-number-input.git) - an HTML numeric input widget

## Installation ##

* change directories to your project folder
* `ember install:addon ui-mixin-helpers`

That's it, it's available to your components through the standard **Mixin** syntax:

````javascript
import InputStatusMixin from '../mixins/input-status';
import InputCorrectionMixin from '../mixins/input-correction';
import UiEventListenerMixin from '../mixins/ui-event-listener';

export default Ember.Component.extend(InputStatusMixin,InputCorrectionMixin,UiEventListenerMixin,{
	// ... your amazing component ...
}
````

Of course you only need to include those mixins which you want to use. There's file size penelty for those that you choose not to use.

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

## Licensing

This component is free to use under the MIT license:

Copyright (c) 2015 LifeGadget Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.