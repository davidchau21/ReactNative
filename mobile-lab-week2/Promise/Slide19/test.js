var f = function(relsolve, reject) {
    relsolve();
    reject();
}

var promise = new Promise(f);
promise
    .then(
        function() {
            console.log('1!');
        }
    )
    .then(
        function() {
            console.log('2!');
        }
    )
    .then(
        function() {
            console.log('3!');
        }
    )