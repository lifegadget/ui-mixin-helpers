/* jshint node: true */
'use strict';

module.exports = {
	name: 'ui-mixin-helpers',
	included: function(app) {
		app.import('ui-mixin-helpers/mixins/input-correction.js');
		app.import('ui-mixin-helpers/mixins/input-status.js');
		app.import('ui-mixin-helpers/mixins/ui-event-listener.js');
	}
};
