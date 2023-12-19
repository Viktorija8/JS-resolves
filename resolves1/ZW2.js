let users = [
    {name:'Shevchenko Taras Hryhorovych'},
    {name:'Franko Ivan Yakovych'},
    {name:'Kostenko Lina Vasylivna'}
];
let menu= document.querySelector('.menu');
for (const user of users) {
    let li= document.createElement('li');
    li.innerText=user.name;
    menu.append(li);
}
let name1= 'Shevchenko Taras Hryhorovych, ';
let name2 = 'Franko Ivan Yakovych, ';
let name3 = 'Kostenko Lina Vasylivna.';
console.log(name1 + name2 + name3);

