function changeGrid() {
    document.getElementById('image-container').classList.remove('list-container');
    document.getElementById('image-container').classList.add('grid-container');
}

function changeList() {
    document.getElementById('image-container').classList.remove('grid-container');
    document.getElementById('image-container').classList.add('list-container');
}