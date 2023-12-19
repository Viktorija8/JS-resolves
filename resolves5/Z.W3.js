//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calc =  (r, h) => {
    let res =2 * r * h * Math.PI;
    console.log(res);
    return res;
}
let result = calc(5,5);
console.log(result);


//////////2/////////

//let calc =(r, h) => r*h;
//ler result = calc(5,5);
//console.log (result);