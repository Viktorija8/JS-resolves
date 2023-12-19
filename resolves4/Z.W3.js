//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function  cylinderArea (radius, height){
    let res =2 * radius * height * Math.PI;
    console.log(res);
    return res;
}
cylinderArea(5,5);
