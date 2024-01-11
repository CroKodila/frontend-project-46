import fs from 'fs';
import path from 'path';
import * as YAML from 'yaml';
import generateDiff from './difGenerator.js';
import stylish from './formatters/stylish.js';

export default function parse(filepath1, filepath2, formatter = 'stylish') {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  if (path.extname(filepath1) === '.json' && path.extname(filepath2) === '.json') {
    const data1 = JSON.parse(fs.readFileSync(absolutePath1, 'utf8'));
    const data2 = JSON.parse(fs.readFileSync(absolutePath2, 'utf8'));
    if (formatter === 'stylish') {
      console.log(stylish(generateDiff(data1, data2)));
    }
  } else if (path.extname(filepath1) === '.yml' && path.extname(filepath2) === '.yml') {
    const data1 = YAML.parse(fs.readFileSync(absolutePath1, 'utf8'));
    const data2 = YAML.parse(fs.readFileSync(absolutePath2, 'utf8'));
    if (formatter === 'stylish') {
      console.log(stylish(generateDiff(data1, data2)));
    }
  }
}
