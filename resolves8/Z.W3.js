//-Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let users = [
    {id:1, name: 'coconut', surname: 'surname1', email:'coconut@gmail.com', phone: 123 },
    {id:2, name: 'apricot', surname: 'surname2', email: 'apricot@gmail.com', phone: 1234 },
    {id:3, name: 'blackberry', surname: 'surname3',  email: 'blackberry@gmail.com', phone: 1235 },
    {id:4, name: 'grape', surname: 'surname4', email: 'grape@gmail.com', phone: 1236 },
    {id:5, name: 'raspberry', surname: 'surname5', email: 'raspberry@gmail.com', phone: 1237 },
    {id:6, name: 'peach', surname: 'surname6', email: 'peach@gmail.com',phone: 1238 },
    {id:7, name: 'pear',surname: 'surname7', email: 'pear@gmail.com', phone: 1239 },
    {id:8, name: 'plum', surname: 'surname8', email: 'plum@gmail.com', phone: 12310 },
    {id:9, name: 'quince', surname: 'surname9', email: 'quince@gmail.com', phone: 12311 },
    {id:10,name: 'watermelon', surname: 'surname10', email: 'watermelon0@gmail.com', phone: 12312}

];

 let sort1 = users.sort((user1, user2) => {
    return user1.id - user2.id

});
console.log(sort1);