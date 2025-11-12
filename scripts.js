const prevButton = document.getElementById('arrow-left');
const nextButton = document.getElementById('arrow-right');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');


let active = 0;
const total = items.length;
let timer;

prevButton.addEventListener('click', function() {
    alert('Previous button clicked');
})

nextButton.addEventListener('click', function() {
    alert('Next button clicked');
})