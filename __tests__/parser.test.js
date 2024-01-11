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
  expect(console.log).toHaveBeenCalledWith('{}');
});

test('testing with non-empty JSON files', () => {
  console.log = jest.fn();
  parse(getFixturePath('test2file1.json'), getFixturePath('test2file2.json'));
  expect(console.log).toHaveBeenCalledWith('{  common:{+ follow:false,  setting1:Value 1,- setting2:200,- setting3:true,+ setting3:null,+ setting4:blah blah,+ setting5:{key5:value5},  setting6:{  doge:{- wow:,+ wow:so much},  key:value,+ ops:vops}},  group1:{- baz:bas,+ baz:bars,  foo:bar,- nest:{key:value},+ nest:str},- group2:{abc:12345,deep:{id:45}},+ group3:{deep:{id:{number:45}},fee:100500}}');
});
test('testing with non-empty YAML files', () => {
  console.log = jest.fn();
  parse(getFixturePath('test3file1.yml'), getFixturePath('test3file2.yml'));
  expect(console.log).toHaveBeenCalledWith('{  common:{+ follow:false,  setting1:Value 1,- setting2:200,- setting3:true,+ setting3:null,+ setting4:blah blah,+ setting5:{key5:value5},  setting6:{  doge:{- wow:,+ wow:so much},  key:value,+ ops:vops}},  group1:{- baz:bas,+ baz:bars,  foo:bar,- nest:{key:value},+ nest:str},- group2:{abc:12345,deep:{id:45}},+ group3:{deep:{id:{number:45}},fee:100500}}');
});
