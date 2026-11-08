function array() {
    const data = [];

    function arr(index) {
        return data[index];
    }

        arr.push = function(value) {
            data.push(value);
        };

    arr.pop = function() {
        return data.pop();
    };

    return arr;
}

const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop()); 