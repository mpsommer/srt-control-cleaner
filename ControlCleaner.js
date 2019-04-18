const fs = require('fs');
const readline = require('readline');

// Ensure that file path is specified on command line.
if (!process.argv[2]) {
  console.log('Please specify path to input file.');
  return;
}
const file = process.argv[2];

//Ensure the file is a .srt file.
if (!file.endsWith('.srt')) {
  console.log('This program only works on .srt file inputs.');
  console.log('Please ensure input file path ends with .srt.');
  return;
}

//Create new file name from command line arg.
const outputFile = file.replace('.srt', '_CLEANED.srt').replace('(broken)', '');

let rs = fs.createReadStream(file);
let lineReader = readline.createInterface({
  input: rs
});
let writer = fs.createWriteStream(outputFile, {
  flags: 'a'
});

rs.on('error', (error) => {
  console.log(error);
  return error;
});
rs.on('end', () => {
  writer.end();
});
writer.on('error', (error) => {
  console.log(error);
  return error;
});

lineReader.on('line',  (line) => {
  writer.write(line + '\n');
});
