var drop = document.querySelector('.dropdown')
var showList = document.querySelector('.show-list');
var list = document.querySelector('.dropdown__list');
var arrow = document.querySelector('.open-arrow');

function show() {
    list.classList.toggle("active");
    arrow.classList.add('close-arrow');
    arrow.classList.remove('open-arrow');
}
  

window.onclick = function(event) {
    if (!event.target.matches('.show-list')) {
    arrow.classList.remove('close-arrow');
    arrow.classList.add('open-arrow');
    var dropdown = document.getElementsByClassName("dropdown__list");
    var i;
    for (i = 0; i < dropdown.length; i++) {
    if(list.classList.contains('active')) {
        list.classList.remove('active');
    }
}}};
