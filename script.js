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
// dropdown.forEach(() => 
//     statusInput.addEventListener('change', (option) =>{
//         console.log(option.target.value);
//     }))


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
    // statusCell.innerHTML = statusDropdown(book.status);
    statusCell.innerHTML = book.status;

    actionCell.innerHTML = `<a>Edit</a> <button class="dlt-btn" onclick="deleteRow(this)" >Delete</button>`

    clearFields();
});

function deleteRow(row){
    table.deleteRow(this);
}

// let dltBtns = document.querySelectorAll('.dlt-btn');
// dltBtns.forEach(btn => {
//     btn.addEventListener('click', () =>{
//         //console.log('the row index is : ' + e.rowIndex)
//         console.log('you clicked on delete');
//     })
// }) // delete

// edit button makes fields editable

function clearFields(){
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
}

function statusDropdown(selected){
    // selected is the status
    let dropdown = 
    `<select name="status" id="status">
        <option value="Plan to read">Plan to read</option>
        <option value="Reading">Reading</option>
        <option selected value="Completed">Completed</option>
    </select>`;
    return dropdown;
}
