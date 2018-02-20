'use strict';

require('reddit.js/reddit.min');
require('../../../../assets/css/index.css');
require('angular-ui-bootstrap/dist/ui-bootstrap-tpls');
import pagination from 'angular-ui-bootstrap/src/pagination';

angular.module('indexPage', ['ui.bootstrap',pagination]);
require('./index-page.component');
