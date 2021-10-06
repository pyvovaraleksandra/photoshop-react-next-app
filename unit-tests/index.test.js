// const { sum, getEvenNumbers } = require('./functions');

import { sum, getEvenNumbers, getSquaredNumbers } from "./functions";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

it ("is 17", () => {
   expect(17).not.toEqual(18);
});

it("should get only even numbers from array", () => {
    const res = getEvenNumbers([1, 2, 3, 4]);
    expect(res).toEqual([2,4])
});

it("should be pow", () => {
    const res = getSquaredNumbers([1,2,3]);
    expect(res).toEqual([1,4,9])
});