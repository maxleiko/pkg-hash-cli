#!/usr/bin/env node
'use strict';

var pkgHash = require('pkg-hash');

console.log(pkgHash(process.argv[2] || process.cwd()));
