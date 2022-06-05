// @flow
var parse = require('csv-parse');
var fs = require('fs');

function toKeyName(name) {
	return name.replace(' ', '_');
}

function toVal(val) {
	return '"' + val + '"';
}

function getSpace(level, separator) {
	var txt = "";
	for (var i = 0; i < level; i++) {
		txt += separator;
	}

	return txt;
}

module.exports = function(srcPath, outPath, opts, cb) {
	if (!cb) {
		cb = opts;
		opts = {};
	}

	var tab = opts.tab || '\t';
	fs.readFile(srcPath, function(err, data) {
		if (err) {
			return cb(err);
		}

		parse(data.toString(), function(err, data) {
			if (err) {
				return cb(err);
			}

			var fileStr = [
				'// @flow',
				'module.exports = {\n'
			].join('\n');

			var columns = data[0];

			fileStr += data.slice(1).map(function(row) {
				if (!row.length) {
					return '';
				}

				var str = getSpace(1, tab) + toKeyName(row[0]) + ': ';
				if (row.length == 1) {
					return str + 'true,';
				}

				str += '{\n';

				str += row.slice(1).map(function(val, index) {
					return getSpace(2, tab) + toKeyName(columns[index + 1]) + ': ' + toVal(val) + ',';
				}).join('\n') + '\n';

				str += getSpace(1, tab) + '},';

				return str;
			}).join('\n') + '\n';

			fileStr += '};';

			fs.writeFile(outPath, fileStr, cb);
		});
	});
};
