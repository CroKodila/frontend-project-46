#!/usr/bin/env node
import { Command } from 'commander';
import { dataFromFilesParse } from '../src/dataFromFileParse.js';
const program = new Command();

program
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2, options) => {
    const format = options.format || 'json';
    dataFromFileParse(filepath1, filepath2, format);
  });

program.parse(process.argv);
