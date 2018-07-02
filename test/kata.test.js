const add = require('../src/kata.js')
describe('add function',
    ()=>{
        test('add is a function', ()=>{
            expect(typeof add).toBe('function')
        })
        test('that takes a string and returns a number', ()=>{
            expect(typeof add('1, 2, 3')).toBe('number')
        })
        test('add returns 0 if given an empty string',()=>{
            expect(add('')).toBe(0)
        })
        test('add returns the number if given a single number',()=>{
            expect(add('1')).toBe(1)
        })
        test('should accept many types of separators', ()=>{
            expect(add('1\n 2, 3')).toBe(6)
        })
        test('should accept many types of separators', ()=>{
            expect(add('1\n 2; 3')).toBe(6)
        })
        test('should throw negative provided int',()=>{

            expect(()=>{
                add('-4, -1, 7, 21')}).toThrow('')
        })
        test('ignores numbers greater than 1000',()=>{
            expect(add('1001, 1, 2, 3')).toBe(6)
        })
        test('delimiters can be any length', ()=>{
            expect(add('//[***]\n1***2***3')).toBe(6)
        })
    }
)