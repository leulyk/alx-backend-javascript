/*
 * reads a CSV database file asynchronously and print
 * the total number of students and the number of students and
 * their names from each field
 */

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        let count = 0;
        const fields = [];
        const fieldCount = [];
        const fieldNames = [];
        data.split('\n').forEach((line, index) => {
          if (line === '') {
            return;
          }
          if (index !== 0) {
            count += 1;
            const lineArray = line.split(',');
            if (fields.indexOf(lineArray[3]) !== -1) {
              fieldCount[fields.indexOf(lineArray[3])] += 1;
              fieldNames[fields.indexOf(lineArray[3])].push(lineArray[0]);
            } else {
              fields.push(lineArray[3]);
              fieldCount.push(1);
              fieldNames.push([lineArray[0]]);
            }
          }
        });
        console.log(`Number of students: ${count}`);
        /* eslint-disable guard-for-in */
        for (const index in fields) {
          let students = '';
          for (const idx in fieldNames[index]) {
            if (idx > 0) {
              students += ', ';
            }
            students += fieldNames[index][idx];
          }
          console.log(`Number of students in ${fields[index]}: ${fieldCount[index]}. List: ${students}`);
        }
      }
    });
  });
}

module.exports = countStudents;
