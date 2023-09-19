// store book objects
let myLibrary = [];

function Book(title, author, pages, status, index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.index = index;
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
let statusInput = document.getElementById('btn-check');

let readTxt = document.createTextNode('Read');
let unreadTxt = document.createTextNode('Not Read');

btnAdd.addEventListener('click', () => {
    let book = new Book(titleInput.value, authorInput.value, 
        pagesInput.value, statusInput.checked, myLibrary.length);
    addBook(book);

    // let row = table.insertRow(book.index); //insert bottom
    let row = table.insertRow(0); //insert top
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let statusCell = row.insertCell(3);
    let actionCell = row.insertCell(4);

    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;
    pagesCell.innerHTML = book.pages;

    /* status button */
    let statusBox = document.createElement('input');
    statusBox.type = "checkbox";
    statusBox.classList.add('btn-check');
    statusBox.id = 'btn-check';
    statusBox.autocomplete = "off";
    if(book.status == true) statusBox.setAttribute('checked', 'checked');

    let statusLabel = document.createElement('label');
    statusLabel.htmlFor = 'btn-check';
    statusLabel.classList.add('btn');
    if(book.status == true) statusLabel.classList.add('btn-success');
    else if(book.status == false) statusLabel.classList.add('btn-secondary');

    if(book.status == true) statusLabel.appendChild(document.createTextNode('Read'));
    else if(book.status == false) statusLabel.appendChild(document.createTextNode('Not Read'));
    //statusLabel.setAttribute('onclick', 'changeStatus(this)');
    statusLabel.addEventListener('click', () => {
        let updatedStatus = changeStatus(statusLabel); 
        book.status = updatedStatus;
        //console.log('the book status is now ' + stat);
    })

    statusCell.append(statusBox); // checkbox
    statusCell.append(statusLabel); // button
    /* status button end */

    let actionButtons = `<!-- <button id="edit-btn" class="btn btn-outline-secondary" onclick="editRow()">Edit</button> -->
    <button class="btn btn-danger" onclick="deleteRow(this)" >Delete</button>`;
    actionCell.innerHTML = actionButtons;

    clearFields();
})

function deleteRow(row){
    let index = row.parentNode.parentNode.rowIndex - 1;
    console.log(index);
    table.deleteRow(index);
    // remove book from library
    myLibrary.splice(index, 1);
}

function clearFields(){
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    //document.getElementById('btn-check').removeAttribute('checked');
}

function changeStatus(label){
    let box = label.previousElementSibling;
    let boxStatus = box.checked.toString();

    // uncheck box
    if(boxStatus == 'true'){
        box.removeAttribute('checked');
        label.replaceChild(document.createTextNode('Not Read'), label.lastChild)
        label.classList.remove('btn-success')
        label.classList.add('btn-secondary');
        return false;
    }
    // check box
    else if(boxStatus == 'false'){
        box.setAttribute('checked', 'checked');
        label.replaceChild(document.createTextNode('Read'), label.lastChild)
        label.classList.remove('btn-secondary')
        label.classList.add('btn-success')
        return true;
    } 
}

function editRow(){

}