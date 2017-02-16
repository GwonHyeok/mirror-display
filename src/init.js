/**
 * Created by ghyeok on 2017. 2. 10..
 */
const path = require('path');
const appRoot = path.join(__dirname, '../');

require('electron-compile').init(appRoot, './main');