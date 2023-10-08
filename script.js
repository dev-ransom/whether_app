const dropDown = document.querySelector('.dropdown');
const showmenu = document.querySelector('.dropdown-content');

dropDown.addEventListener('click', dropdown);

function dropdown(){
    showmenu.classList.toggle('show-menu')
}

console.log(showmenu);