// store book objects
let myLibrary = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    // this.info = function(){
    //     return `${title} by ${author}, ${pages} pages, ${status}`;
    // }
}

// completed, not read, in progress, plan to read

let modal = document.getElementById('add-modal');
let btn = document.getElementById('add-btn');
let span = document.getElementsByClassName('close')[0];


let mockingbird = new Book('To Kill A Mockingbird', 'Harper Lee', '281', 'Read');
let cuckoo = new Book('One Flew Over the Cuckoo\'s Nest', 'Ken Kesey', '320', 'Read');
let fahrenheit = new Book('Fahrenheit 451', 'Ray Bradbury', '158', 'Read');
let micenmen = new Book('Of Mice and Men', 'John Steinbeck', '107', 'Not Read')
let gatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '208', 'Read');

function addBook(name){
    myLibrary.unshift(name);
}
addBook(gatsby);
addBook(cuckoo);
addBook(fahrenheit);
addBook(micenmen);

let table = document.getElementById('table-body');
console.log(table);

let btnAdd = document.getElementById('add-btn');
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');



btnAdd.addEventListener('click', () => {
    // let title = titleInput.value;
    // let author = authorInput.value;
    // let format = ` <tr>
    //     <td scope="row">${title}</td>
    //     <td>${author}</td>
    // </tr>`;
    // tableBody.innerHTML += format;

    // let newRow = table.insertRow(0);
    // let titleCell = newRow.insertCell(0);
    // let authorCell = newRow.insertCell(1);
    // titleCell.innerHTML = titleInput.value;
    // authorCell.innerHTML = authorInput.value;
    // titleInput.value = '';
    // authorInput.value = '';

    let book = new Book(titleInput.value, authorInput.value);
    console.log(book);

    let newRow = table.insertRow(0);
    let titleCell = newRow.insertCell(0);
    let authorCell = newRow.insertCell(1);
    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;
    titleInput.value = '';
    authorInput.value = '';
});


// function addRow(obj){
//     let format = ` <tr>
//         <td scope="row">${obj.title}</td>
//         <td>${obj.author}</td>
//         <td>${obj.pages}</td>
//         <td>${obj.status}</td>
//         <tr>`;
//     return format;
// }

console.log(myLibrary);