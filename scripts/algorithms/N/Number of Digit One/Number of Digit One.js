var countDigitOne = function(n) {
    if(n <= 0) return 0;
    if(n < 10) return 1;
    var base = Math.pow(10, n.toString().length - 1);
    var answer = parseInt(n / base);
    return countDigitOne(base - 1) * answer + (answer === 1 ? (n - base + 1) : base) + countDigitOne(n % base);
};
