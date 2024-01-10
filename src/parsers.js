import fs from 'fs';
import path from 'path';
import * as YAML from 'yaml';
import generateDiff from './difGenerator.js';

function parseJson(filepath1, filepath2) {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  const data1 = JSON.parse(fs.readFileSync(absolutePath1, 'utf8'));
  const data2 = JSON.parse(fs.readFileSync(absolutePath2, 'utf8'));

  const diff = generateDiff(data1, data2);

  console.log(diff);
}
function parseYaml(filepath1, filepath2) {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);

  const data1 = YAML.parse(fs.readFileSync(absolutePath1, 'utf8'));
  const data2 = YAML.parse(fs.readFileSync(absolutePath2, 'utf8'));

  const diff = generateDiff(data1, data2);

  console.log(diff);
}
export default function parse(filepath1, filepath2) {
  if (path.extname(filepath1) === '.json' && path.extname(filepath1) === '.json') {
    parseJson(filepath1, filepath2);
  } else if (path.extname(filepath1) === '.yml' && path.extname(filepath1) === '.yml') {
    parseYaml(filepath1, filepath2);
  }
}
