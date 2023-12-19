//- створити функцію яка приймає масив та виводить кожен його елемент
let arr = [];
function customElements (size){
    let arr = [];
    for (let i = 0; i < size; i++){
    arr[arr.length] = Math.round(Math.random() * 5);
}
return arr
}
console.log(customElements(5));

//function logger (arr) {
//for (const item of arr){
//console.log('item:', item);
//{
//{
//logger([12,64, 'sdf',0, null])