#!/usr/bin/env node

var CSVToJS = require('./../lib/index');
var path = require('path');
var optimist = require('optimist');

var argv = optimist.usage([
	'USAGE: $0 [-o <output>] example.csv',
	'Convert csv data to a CommonJS module.',
	'First column of the CSV file will be used as the export name for the row.',
	'Column names of the following rows will be sub properties of exported row',
].join('\n'))
.option('out', {
	alias: 'o',
	'default': '$0/$1.js',
	description: [
		'Output path for the JS file.',
		'$0 will be replaced the path of the dir containing CSV.',
		'$1 will be the name of CSV file without extension.',
	].join('\n')
})
.option('tabspace', {
	alias: 'tb',
	description: [
		'Use spaces instead of tabs. Takes in number of spaces to replace a tab.'
	].join('\n'),
}).argv;

if (argv.help) {
	optimist.showHelp(console.log);
	process.exit(0);
}

var csvPath = argv._[0];
if (!csvPath || !csvPath.length) {
	console.log('Passing the path to the CSV file is required. Like: csvtojs ./data/example.csv');
	process.exit(1);
}

if (csvPath[0] !== '.' && csvPath[0] !== '/') {
	csvPath = './' + csvPath;
}

function getSpaces(num) {
	var txt = '';
	for (var i = 0; i < num; i++) {
		txt += ' ';
	}

	return txt;
}

var outPath = argv.out || '$0/$1.js';
var csvPathParsed = path.parse(csvPath);

outPath = outPath.replace('$0', csvPathParsed.dir);
outPath = outPath.replace('$1', csvPathParsed.name);

var tab = argv.tabspace ? getSpaces(+argv.tabspace) : '\t';

CSVToJS(csvPath, outPath, {
	tab: tab,
}, function(err) {
	if (err) {
		console.log(err.toString());
		process.exit(1);
	}

	console.log('Generated JS file: ', outPath);
});


