

import fs from 'fs';
import path from 'path';

export function dataFromFileParse(filepath1, filepath2, format) {
  const absolutePath1 = path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);
  
  const data1 = JSON.parse(fs.readFileSync(absolutePath1, 'utf8'));
  const data2 = JSON.parse(fs.readFileSync(absolutePath2, 'utf8'));
  const mergedData = { ...data1, ...data2 };
  
  let outputData;
  if (format === 'json') {
    outputData = JSON.stringify(mergedData);
  } else {
    // handle other formats here
  }
  
  const outputFile = path.resolve(process.cwd(), 'outputFile.' + format);
  fs.writeFileSync(outputFile, outputData, 'utf8');
}