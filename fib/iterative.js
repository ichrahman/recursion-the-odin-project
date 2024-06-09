function fib(n) {
    if (n === 0) return [0];
    else if (n === 1) return [1];

    let fibSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        let nextSeq = fibSeries[fibSeries.length - 2] + fibSeries[fibSeries.length - 1];
        fibSeries.push(nextSeq);
    }

    return fibSeries;
}

console.log(fib(5));