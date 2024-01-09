#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .action(() => {
    console.log('Usage: gendiff [options]');
  });

program.parse(process.argv);
