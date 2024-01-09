import fs from 'fs';
import path from 'path';
import _ from 'lodash';

// Comparison
function generateDiff(obj1, obj2) {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const diff = keys.map((key) => {
    if (_.isEqual(obj1[key], obj2[key])) {
      return `  ${key}: ${obj1[key]}`;
    }
    if (!_.has(obj1, key)) {
      return `+ ${key}: ${obj2[key]}`;
    }
    if (!_.has(obj2, key)) {
      return `- ${key}: ${obj1[key]}`;
    }
    return [`- ${key}: ${obj1[key]}`, `+ ${key}: ${obj2[key]}`];
  });
  return `{\n${_.flatten(diff).join('\n')}\n}`;
}

// Reading and parsing data from files
export function dataFromFilesParse(filepath1, filepath2) {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);
  
  const data1 = JSON.parse(fs.readFileSync(absolutePath1, 'utf8'));
  const data2 = JSON.parse(fs.readFileSync(absolutePath2, 'utf8'));
  
  const diff = generateDiff(data1, data2);
  
  console.log(diff);
}
