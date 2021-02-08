var showList = document.querySelector('.show-list');
var list = document.querySelector('.dropdown__list');

showList.addEventListener('click', function() {
    list.classList.add('active');
    list.classList.remove('inactive')
});

showList.addEventListener('click', function() {
    list.classList.add('active');
});


