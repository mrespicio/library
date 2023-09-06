// store book objects
let myLibrary = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

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

let dropdown = document.querySelectorAll('.dropdown');

btnAdd.addEventListener('click', () => {
    let book = new Book(titleInput.value, authorInput.value, 
        pagesInput.value, statusInput.value);
    addBook(book);

    let row = table.insertRow(0);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let statusCell = row.insertCell(3);
    let actionCell = row.insertCell(4);

    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;
    pagesCell.innerHTML = book.pages;

    let dropDownSelection = `<select class="dropdown" name="status" id="status">`
    if(book.status == 'Plan to read'){
        dropDownSelection += `<option value="Plan to read" selected>Plan to read</option>
            <option value="Reading">Reading</option>
            <option value="Completed">Completed</option>`
    }
    else if(book.status == 'Reading'){
        dropDownSelection += `<option value="Plan to read">Plan to read</option>
        <option value="Reading" Selected>Reading</option>
        <option value="Completed">Completed</option>` 
    }
    else if(book.status == 'Completed'){
        dropDownSelection += `<option value="Plan to read">Plan to read</option>
        <option value="Reading">Reading</option>
        <option value="Completed" Selected>Completed</option>`
    }

    statusCell.innerHTML = dropDownSelection + `\n </select>`;
    console.log(statusCell.innerHTML);

    actionCell.innerHTML = `<!-- <button id="edit-btn" onclick="editRow()">Edit</button> --> 
        <button onclick="deleteRow()" >Delete</button>`;

    clearFields();

});

function deleteRow(){
    table.deleteRow(this);
}

function editRow(){
    //console.log(row);
    // row.cells[0].innerHTML = 'test';
}

function clearFields(){
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
}
