const form = document.querySelector('form');
const card1 = document.querySelector('.card');
const card2 = document.querySelector('.card-2');


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    card1.classList.add('hide');
    card2.classList.remove('hide');
})

