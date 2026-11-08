function seq(func) {

    return function next(value) {

        if (typeof value === "function") {
            return seq(x => func(value(x)));
        }

        return func(value);
    };
}

console.log(
    seq(x => x + 7)
       (x => x * 2)
       (5)
);
