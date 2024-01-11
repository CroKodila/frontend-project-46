#!/usr/bin/env node
import { Command } from 'commander';
import parse from '../src/parsers.js';

const program = new Command();

program
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type> (default = "stylish")', 'output format')
  .action((filepath1, filepath2) => {
    parse(filepath1, filepath2);
  });

program.parse(process.argv);
