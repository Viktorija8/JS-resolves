//- створити функцію яка створює параграф з текстом. Текст задати через аргумент.

function paragraph(descr){
    document.write(
        `
        <div>
            <p>${descr}</p>
        </div>
        `
    );
}
paragraph('lorem ipsum');

