// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('test if it is a valid phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('test if it is a valid phone number', () => {
    expect(functions.isPhoneNumber('987-654-3210')).toBe(true);
});
test('test if it is an invalid phone number', () => {
    expect(functions.isPhoneNumber('Hello')).toBe(false);
});
test('test if it is an invalid phone number', () => {
    expect(functions.isPhoneNumber('2934029234')).toBe(false);
});


test('test if it is a valid email', () => {
    expect(functions.isEmail('FirstName@ucsd.edu')).toBe(true);
});
test('test if it is a valid email', () => {
    expect(functions.isEmail('LastName@gmail.com')).toBe(true);
});
test('test if it is an invalid email', () => {
    expect(functions.isEmail('344-343-2322')).toBe(false);
});
test('test if it is an invalid email', () => {
    expect(functions.isEmail('wrgiuuhiowu')).toBe(false);
});


test('test if it is a strong password', () => {
    expect(functions.isStrongPassword('wrgiuuhiowu')).toBe(true);
});
test('test if it is a strong password', () => {
    expect(functions.isStrongPassword('sdfsddgiudfs')).toBe(true);
});
test('test if it is a weak password', () => {
    expect(functions.isStrongPassword('89aisjpufia')).toBe(false);
});
test('test if it is a weak password', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});


test('test if it is a valid date', () => {
    expect(functions.isDate('01/01/0001')).toBe(true);
});
test('test if it is a valid date', () => {
    expect(functions.isDate('99/99/9999')).toBe(true);
});
test('test if it is an invalid date', () => {
    expect(functions.isDate('December 12th')).toBe(false);
});
test('test if it is an invalid date', () => {
    expect(functions.isDate('9999/9999/9999')).toBe(false);
});


test('test if it is a hexcolor', () => {
    expect(functions.isHexColor('abcdef')).toBe(true);
});
test('test if it is a hexcolor', () => {
    expect(functions.isHexColor('bad')).toBe(true);
});
test('test if it is not a hexcolor', () => {
    expect(functions.isHexColor('abcdefghijklmnopqrstuvwxyz')).toBe(false);
});
test('test if it is not a hexcolor', () => {
    expect(functions.isHexColor('2')).toBe(false);
});