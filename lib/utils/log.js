'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quiet = false;

function log(msg) {
    log.console(msg);
}

log.console = function (msg) {
    /* istanbul ignore next */
    process.env.NODE_ENV !== 'test' && !quiet && console.log(msg);
};

log.info = function (msg) {
    log.console('[info]: ' + msg);
};

log.error = function (msg) {
    log.console('[error]: ' + _colors2.default.red(msg));
};

log.build = function (msg) {
    var format = _path2.default.join('.', msg);
    log.info('Create ' + _colors2.default.green(format));
};

log.trigger = function (stat) {
    quiet = !!stat;
};

exports.default = log;