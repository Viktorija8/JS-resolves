//- створити функцію яка повертає найменьше число з масиву
const numbers = [-3434, 234, 55, 45, -432, 765, 3, 2, 6, 0];

function minOfArr(arr) {
    let min = arr[0];
    for (const num of arr) {
        if (min > num) min = num
    }
    return min;
}

console.log(minOfArr(numbers));

function minOfArr1(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min;
}

console.log(minOfArr1(numbers));

