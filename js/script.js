const mainEl = document.querySelector('.main');

const formEl = document.createElement('form');

const inputEl = document.createElement('input');

const searchButtonEl = document.createElement('button');

formEl.addEventListener('submit',async (e)=>{
    e.preventDefault(); // Этот метод отменяет поведение браузера по умолчанию, которое происходит при обработке события.(не обновляет страницу)

    const inputValue = Object.fromEntries(new FormData(e.target));
    const response = await fetch(`https://api.github.com/users/${inputValue.name}`);

    console.log(response);
})

formEl.appendChild(
    inputEl
);

searchButtonEl.classList.add('search-button');
searchButtonEl.setAttribute('type', 'submit');
inputEl.setAttribute('name', 'name');
searchButtonEl.innerHTML = 'Search';
formEl.appendChild(searchButtonEl);
mainEl.appendChild(formEl);