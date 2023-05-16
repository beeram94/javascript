## Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

``` js
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let c = n;
    return function() {
        return c++
        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

```

## Explaination

Becoz of closure the outer variable can be used inside the inner function. 