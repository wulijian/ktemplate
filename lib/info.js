/**
 * @date 12-12-28
 * @describe: 简单的日志类
 * @author: KnightWu
 * @version: 1.0
 */
var fs = require('fs');
var path = require('path');

var DEBUG = true;

/**
 * 获取当前时间
 * @return {string}
 */
var getTime = function () {
    var date = new Date();
    return '[' + date.getFullYear() + '-' +
        (date.getMonth() + 1) + '-' +
        date.getDate() + ' ' +
        date.getHours() + ':' +
        date.getMinutes() + ':' +
        date.getSeconds() + ':' +
        date.getMilliseconds() + '] ： ';
};

exports.error = function (msg) {
    console.error(msg);
};
/**
 * 普通log，带开关，同 console.log
 */
exports.log = function () {
    if (DEBUG) {
        console.log.apply(undefined, arguments);
    }
};
/**
 * 带时间的log
 */
exports.logt = function () {
    arguments[0] = getTime() + arguments[0];
    if (DEBUG) {
        console.log.apply(undefined, arguments);
    }
};