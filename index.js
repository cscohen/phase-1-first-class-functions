function receivesAFunction(callback) {
    return callback();
}

const fn = returnsANamedFunction()

function returnsAnAnonymousFunction() {
    const fn = function(){}
}