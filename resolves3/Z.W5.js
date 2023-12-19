//- Використовуючи данні з масиву, за допомоги document.write та циклупобудувати структуру по шаблону
document.write('<ul>')
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (const item of listOfItems) {
    document.write(`<li>${item}</li>`)
}
document.write('</ul>')