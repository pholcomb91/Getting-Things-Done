function editToDo () {
    let li= document.getElementsByClassName(list-group-item);
    li.addEventListener('click',editItem);
    li.textContent= input.value;
}