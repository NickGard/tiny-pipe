# tiny-pipe

[![source](https://badgen.net/npm/v/@ngard/tiny-pipe)](https://www.npmjs.com/package/@ngard/tiny-pipe)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-pipe)](https://bundlephobia.com/result?p=@ngard/tiny-pipe)
[![build status](https://badgen.net/travis/NickGard/tiny-pipe)](https://travis-ci.org/NickGard/tiny-pipe)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal composition utility. For when every byte counts!
Creates a new function that applies the arguments to the left-most function and applies the result of that call to the function to its right and so on for all functions passed. That function returns the result of these nested calls.

```js
pipe(fn1, fn2, fn3)('yeah!')

// is equivalent to
fn3(fn2(fn1('yeah!')))
```

<hr/>

## Install

```bash
npm install @ngard/tiny-pipe
```

## Syntax

```javascript
pipe(/* function1 [, function2 [, ...] ] */);
```

## Parameters
`function1` - Any function

## Return
A new function that applies the arguments to the left-most function and applies the result of that call to the function to its right and so on for all functions passed. That function returns the result of these nested calls.

<hr/>

## Examples

```javascript
import { pipe } from '@ngard/tiny-pipe';

function biggerThanZero(n) {
  return Math.max(0, n);
}
function lessThanTen(n) {
  return Math.min(10, n);
}
const betweenZeroAndTen = pipe(biggerThanZero, lessThanTen);

betweenZeroAndTen(4); // returns 4
betweenZeroAndTen(14); // returns 10
betweenZeroAndTen(-8); // returns 0
```

```javascript
import { pipe } from '@ngard/tiny-pipe';

function double(n) {
  return 2 * n;
}
function addFive(n) {
  return 5 + n;
}
const doubleAndAddFive = pipe(double, addFive);
doubleAndAddFive(4); // 13

const addFiveAndDouble = pipe(addFive, double);
addFiveAndDouble(4); // 18
```
