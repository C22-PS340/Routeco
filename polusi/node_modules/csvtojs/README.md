# csvtojs
NPM module to convert CSV data to an importable CommonJS module. Each row is exported as an object.
The first row value is used as the object key, and the row values are object properties of the
exported row.


## Installation
```
npm install -g csvtojs
```

## Example
sample.csv
```
key,version1,version2
num_builds,2,10
speed,200,10
```
Convert using the following command
```
csvtojs ./sample.csv
```
This will generate the following javascript in the file `sample.js`
```
module.exports = {
	num_builds: {
		version1: "2",
		version2: "10",
	},
	speed: {
		version1: "200",
		version2: "10",
	},
};
```

## Flags
### -o, --out
Specify the output JS file. Can use `$0` and `$1` to refer to the csv directory & csv file name without extension. Example:
```
jstocsv --out src/data/$1.js sample.csv
```
will create JS file `src/data/sample.js`.

### -tb, --tabspace
By default `csvtojs` will output pretty JS with indentation through tabs. This flags lets you specify number of spaces instead of tabs to indent the JS file. Example:
```
jstocsv --tabspace 2 sample.csv
```
Will generate `sample.js` with 2 spaces used for indentation


