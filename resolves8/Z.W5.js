//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clients = [
    { id: 1, name: 'Leanne', username: 'Bret', email: 'sincere@april.biz', phone: 1-770-736-8031, order: ['artichoke', 'beet', 'bell']},
    { id: 2, name:  'Dennis', username: 'Bauch', email: 'karley_Dach@jasper.info', phone: 1-466-777-8478, order: ['broccoli', 'cabbage', 'carrot']},
    { id: 3, name:  'Nicholas', username: 'Karianne', email: 'kariane@jasper.info', phone: 1-477-995-8899, order: ['cucumber', 'eggplant', 'green been']},
    { id: 4, name:  'Glenna', username: 'Kamren', email: 'kamren@jasper.info', phone: 1-477-935-666, order: ['onion', 'potato', 'corn']},
    { id: 5, name:  'Clementina', username: 'Corker', email: 'corcer@jasper.info', phone: 1-345-935-4567, order: ['radish', 'zucchini', 'celery']},
    { id: 6, name:  'Johns', username: 'Elwyn', email: 'elwyn@jasper.info', phone: 1-477-123-7896, order: ['leek', 'lettuce', 'mushroom']},
    { id: 7, name:  'Moria', username: 'Nienow', email: 'nienow@jasper.info', phone: 1-477-453-9000, order: ['pea', 'pumpkin', 'sweet potato']},
    { id: 8, name:  'Ervin', username: 'Delphine', email: 'delphine@jasper.info', phone: 1-123-534-5674, order: ['watermelon', 'pea', 'lots']},
    { id: 9, name:  'Jacobson', username: 'Stanton', email: 'stanton@jasper.info', phone: 1-477-555-6785, order: ['great', 'onion', 'carrot']},
    { id: 10, name:  'Patricia', username: 'Lebsack', email: 'lebsak@jasper.info', phone: 1-757-324-9087, order: ['broccoli', 'pea', 'corn']},

]

let sort = clients.sort((client1, client2) => {
    return client2.id - client1.id

});
console.log(sort);