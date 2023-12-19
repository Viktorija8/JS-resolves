//Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

const arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
arr.map((item) => console.log(item.length));



//- Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'

const arr2 = ['hello world', 'lorem ipsum', 'javascript is cool'];
arr2.map((item) => console.log(item.toUpperCase()));


//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const arr3 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
arr3.map((item) => console.log(item.toLowerCase()));