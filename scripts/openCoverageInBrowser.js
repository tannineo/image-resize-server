/**
 * a script tool to open the coverage html in default browser
 */
const open = require('open')
const path = require('path')

open(path.resolve(__dirname, '../coverage/index.html'))
