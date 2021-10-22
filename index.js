#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name,
    tagLine: `Hello there`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true
});


console.log(
`
Javier Martinez Lizama - Software Engineer


Github:     https://github.com/jmlgh

`);