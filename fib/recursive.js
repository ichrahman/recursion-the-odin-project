function fib(n) {
    function fibHelper(num) {
        if (num === 0) return 0;
        else if (num === 1) return 1;

        else {
            return fibHelper(num - 1) + fibHelper(num - 2);
        }
    }

    let fibSequence = [];
    for (i = 0; i < n; i++) {
        fibSequence.push(fibHelper(i));
    }

    return fibSequence;
}

console.log(fib(5))