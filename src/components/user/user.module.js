'use strict';

// require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
// require('../../../assets/css/app.css');

require('./index-page/index-page.module');

angular.module('user', [
  'indexPage',
]);

require('./user.component');
require('./user.config');
