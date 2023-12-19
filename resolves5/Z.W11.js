// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let result = 0;
    for (const num of arr) {
        result += num;
    }
    return result;
}
console.log(sum([1, 2, 10]));
