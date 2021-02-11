var showList = document.querySelector('.show-list');
var list = document.querySelector('.dropdown__list');
var arrow = document.querySelector('.dropdown__icon');

function show() {
    list.classList.toggle('active');
    arrow.classList.toggle('dropdown__icon-opacity');
}
  

window.onclick = function(event) {
    if (!event.target.matches('.show-list')) {
    var dropdown = document.getElementsByClassName("dropdown__list");
    var i;
    for (i = 0; i < dropdown.length; i++) {
    if(list.classList.contains('active')) {
        list.classList.remove('active');
    }
}}};
