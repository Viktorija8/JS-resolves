//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function text (text) {
    document.write('<ul>');
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write('</ul>');

}
text('lorem lorem lorem');