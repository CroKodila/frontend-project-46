import path, { dirname } from 'path';
import { jest } from '@jest/globals';
import { fileURLToPath } from 'url';
import parse from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('testing with empty files', () => {
  console.log = jest.fn();
  parse(getFixturePath('test1file1.json'), getFixturePath('test1file2.json'));
  expect(console.log).toHaveBeenCalledWith('{\n\n}');
});

test('testing with non-empty JSON files', () => {
  console.log = jest.fn();
  parse(getFixturePath('test2file1.json'), getFixturePath('test2file2.json'));
  expect(console.log).toHaveBeenCalledWith('{\n+ follow: false\n  host: hexlet.io\n+ proxy: 123.234.53.22\n- timeout: 20\n+ timeout: 50\n- verbose: true\n}');
});

test('testing with non-empty YAML files', () => {
  console.log = jest.fn();
  parse(getFixturePath('test3file1.yml'), getFixturePath('test3file2.yml'));
  expect(console.log).toHaveBeenCalledWith('{\n+ follow: false\n  host: hexlet.io\n+ proxy: 123.234.53.22\n- timeout: 20\n+ timeout: 50\n- verbose: true\n}');
});
