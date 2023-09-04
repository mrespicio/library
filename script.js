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

let table = document.querySelector('table');
console.log(table);

// iterate myLibrary
// function to create format
// append format to table

myLibrary.forEach(item => {
    let newRow = addRow(item);
    table.innerHTML += newRow;
});

function addRow(obj){
    let format = ` <tr>
        <td>${obj.title}</td>
        <td>${obj.author}</td>
        <td>${obj.pages}</td>
        <td>${obj.status}</td>
        <tr>`;
    return format;
}

console.log(myLibrary);