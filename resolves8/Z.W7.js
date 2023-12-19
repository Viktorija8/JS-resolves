// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, mspeed, volume ){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.mspeed = mspeed;
    this.volume = volume;
}

console.log(Car);

Car.prototype.greeting = function drive () {
    return `we are going at speed $ {this.mspeed}`
};
console.log(Car.prototype.greeting())


/////////////////////////////////////
this.info = function () {
    console.log('------------ INFO ------------')
    console.log('model : ', this.model);
    console.log('producer : ', this.producer);
    console.log('year : ', this.year);
    console.log('maxSpeed : ', this.maxSpeed);
    console.log('volume : ', this.volume);
    // console.log(`driver : ${this.driver?.name} | ${this.driver?.age}`);
    console.log('driver : ', this.driver);
    console.log('------------ INFO ------------')
}
this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
}
this.changeYear = function (newYear) {
    this.year = newYear;
}
this.addDriver = function (driver) {
    this.driver = driver;
}
}

const car1 = new Car1('X6', 'BMW', 2010, 200, 2);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(15);
// car1.info();
// car1.changeYear(1999);
// car1.info();
// car1.addDriver({name: 'Max', age: 20, exp: 2});
// car1.info();

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log('------------ INFO CLASS ------------')
        console.log('model : ', this.model);
        console.log('producer : ', this.producer);
        console.log('year : ', this.year);
        console.log('maxSpeed : ', this.maxSpeed);
        console.log('volume : ', this.volume);
        // console.log(`driver : ${this.driver?.name} | ${this.driver?.age}`);
        console.log('driver : ', this.driver);
        console.log('------------ INFO CLASS ------------')
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

// Car2.drive()
const car2 = new Car2('X6', 'BMW', 2010, 200, 2);
// car2.drive();
// car2.info();
// car2.increaseMaxSpeed(15);
// car2.info();
// car2.changeYear(1999);
// car2.info();
// car2.addDriver({name: 'Max', age: 20, exp: 2});
// car2.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends Human {
    constructor(name, age, footSize) {
        super(name, age)
        this.footSize = footSize;
    }
}

const popelArr = [
    new Cinderella('Alina', 22, 36),
    new Cinderella('Tamara', 17, 45),
    new Cinderella('Anna', 17, 37),
    new Cinderella('Inna', 30, 38),
    new Cinderella('Rita', 30, 39),
    new Cinderella('Olga', 17, 39),
    new Cinderella('Irina', 18, 34),
    new Cinderella('Oksana', 25, 35),
    new Cinderella('Tanya', 29, 40),
    new Cinderella('Sabrina', 57, 46),
];

class Prince extends Human {
    constructor(name, age, bootSize) {
        super(name, age)
        this.bootSize = bootSize;
    }

    findCinderella1(arr) {
        if (!this.bootSize) throw new Error('нема)')
        for (const cinderella of arr) {
            if (cinderella.footSize === this.bootSize) {
                return cinderella;
            }
        }
    }

    findCinderella2(arr) {
        if (!this.bootSize) throw new Error('нема)')
        return arr.find((cinderella) => cinderella.footSize === this.bootSize);
    }
}

const prince1 = new Prince('Sergey', 18);

try {
    const cinderella1 = prince1.findCinderella1(popelArr);
    console.log('cinderella1: ', cinderella1);
} catch (e) {
    console.error(e.message);
}

const prince2 = new Prince('Sergey', 18, 46);

try {
    const cinderella2 = prince2.findCinderella2(popelArr);
    console.log('cinderella2: ', cinderella2);
} catch (e) {
    console.error(e.message);