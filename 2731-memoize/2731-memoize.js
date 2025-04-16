/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let callCount=0;
    let cache=new Map();
    
    return memofn= function(...args) {
        let key= args.join(',')
        if(!cache.has(key)){
            callCount++;
            cache.set(key,fn(...args))
        }
        return cache.get(key)
    }
    return  memofn
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */