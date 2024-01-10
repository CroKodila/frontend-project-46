import { dataFromFilesParse } from "../src/dataFromFilesParse.js";
test('testing with empty files', () => { 
    console.log = jest.fn();
    dataFromFilesParse(path.resolve('test1file1.json'), path.resolve('test1file2.json'));
    expect(console.log).toHaveBeenCalledWith('{\n}');
});

test('testing with non-empty files', () => { 
    console.log = jest.fn();
    dataFromFilesParse(path.resolve('test2file1.json'), path.resolve('test2file2.json'));
    expect(console.log).toHaveBeenCalledWith('{\n+ follow: false\n  host: hexlet.io\n+ proxy: 123.234.53.22\n- timeout: 20\n+ timeout: 50\n- verbose: true\n}');
})