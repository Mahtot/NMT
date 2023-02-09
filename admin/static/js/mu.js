console.log('hello world');
console.log(1+3)

    exports.geometricSum=function (a, x, n) {
    if(x === 1) return a*n;
    return a*(1 - Math.pow(x, n))/(1 - x);
    }
   