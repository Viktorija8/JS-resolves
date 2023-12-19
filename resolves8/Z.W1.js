//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    console.log(this);
}
let user1 =  new User (1, 'coconut', 'surname1', 'email1', 123 )
let user2 =  new User (2, 'apricot', 'surname2', 'email2', 1234 )
let user3 =  new User (3, 'blackberry', 'surname3', 'email3', 1235 )
let user4 =  new User (4, 'grape', 'surname4', 'email4', 1236 )
let user5 =  new User (5, 'raspberry', 'surname5', 'email5', 1237 )
let user6 =  new User (6, 'peach', 'surname6', 'email6', 1238 )
let user7 =  new User (7, 'pear', 'surname7', 'email7', 1239 )
let user8 =  new User (8, 'plum', 'surname8', 'email8', 12310 )
let user9 =  new User (9, 'quince', 'surname9', 'email9', 12311 )
let user10 =  new User (10, 'watermelon', 'surname10', 'email10', 12312)