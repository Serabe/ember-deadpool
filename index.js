/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-deadpool',

  included: function(app) {
    this._super.included.apply(this, arguments);

    if (app && typeof app.import === 'function') {
      app.import('vendor/actioncable.js');
    }
  },

  _findApp: function(hostApp) {
    var app = this.app || hostApp;

    while (app.app) {
      app = app.app;
    }

    return app;
  }
};
