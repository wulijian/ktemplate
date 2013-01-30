/**
 * @date 13-1-9
 * @describe:
 * @author: wulj
 * @version: 1.0
 */
var kp = require('../index');
var fs = require('fs');
var path = require('path');

fs.writeFileSync('./test.js', kp.compile('./m.html'));
kp.generateSourceMap(path.resolve(__dirname, './test.js'));