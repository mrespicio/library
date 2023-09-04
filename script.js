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

// addBook(gatsby);
// addBook(cuckoo);
// addBook(fahrenheit);
// addBook(micenmen);

let table = document.getElementById('table-body');

let btnAdd = document.getElementById('add-btn');
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let statusInput = document.getElementById('status');

btnAdd.addEventListener('click', () => {
    let book = new Book(titleInput.value, authorInput.value, 
        pagesInput.value, statusInput.value);
    addBook(book);

    let row = table.insertRow(0);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let statusCell = row.insertCell(3);

    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;
    pagesCell.innerHTML = book.pages;
    statusCell.innerHTML = book.status;

    clearFields();
});

function clearFields(){
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
}


// function addRow(obj){
//     let format = ` <tr>
//         <td scope="row">${obj.title}</td>
//         <td>${obj.author}</td>
//         <td>${obj.pages}</td>
//         <td>${obj.status}</td>
//         <tr>`;
//     return format;
// }

