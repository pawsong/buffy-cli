#!/usr/bin/env node
var chalk = require('chalk');

var BLOCK_SIZE = 3;
var BLOCK = Array(BLOCK_SIZE).join(' ');

var data = [];

function print(str) {
  data.push(str.replace(/\s/g, BLOCK).replace(/x/g, chalk.bgWhite(BLOCK)));
}

print('                                        ');
print('  xxxxxxx                               ');
print('  xxxxxxx                               ');
print('  x x   x                               ');
print(' xx x   x                               ');
print(' xxxx   x       x  xxxx       xx  xx    ');
print(' xxxx   xxxxxxxxx  x  x       x   x     ');
print('   xxxxxxxxxxxxxx  xxxxx x x xxx xxx x x');
print('   xxxxxxxxxxxxxx  x   x x x  x   x  x x');
print('   xxxxxxxxxxxxxx  x   x x x  x   x  x x');
print('   xx          xx  xxxxx xxx  x   x  xxx');
print('                                       x');
print('                                     xxx');
print('                                        ');

console.log(data.join('\n'));
