//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let  lishka =(arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

lishka(['lorem', 123, 456,'item', true, 'bla']);
