'use strict';
const eslintConfigAngular = require('eslint-config-angular');
window.$ = window.jQuery = require('../node_modules/jquery/dist/jquery');

// require('../node_modules/jquery/dist/jquery');
// require('../assets/sass/index.sass');

import angular from 'angular';
require('angular-ui-router');

// require('./core/core.module');
require('./components/user/user.module');

angular.module('angularTestTask', [
  'ui.router',
  'user',
]);

require('./app.config');
