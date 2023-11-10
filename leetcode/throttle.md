```js

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
  
  let nextArgs = null;
  let block = false
  return function(...args) {

      if(block){
          nextArgs = args
      }else{
          fn(...args)
          block = true

        const checkothercalls = () => {
          setTimeout(() => {
              block = false
              if(nextArgs) {
                  fn(...nextArgs)
                  block = true
                  nextArgs = null
                  checkothercalls()
              }

          }, t)
        }
        checkothercalls()
      }

  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */

```

## Explaination
Throttle is used for limit the invoking of a function. 
there will be a cooling period where it will not allow to call that function but instead it keeps on tracking the latest args if throttle function is being called in that cooling period.
finally once the cooling period is done it will call the function with the latest args captured.