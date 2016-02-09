"use strict";
import sf from 'sf';//resolved by webpack's "externals"
import Module from './module';


/**
 * optional, if *.less exist
 * without *.less these lines in the package.json can be removed
 * "less": "^2.6.0"
 * "less-loader": "^2.2.2"
 * "style-loader": "^0.13.0"
 * "css-loader": "^0.23.1"
 */
import 'style!css?minimize!less!./module.less';

sf.registerInstanceType(Module,"js-sf-module-class");
export { Module as default };