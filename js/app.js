import arrayDbCategory from './db/db.js';

document.addEventListener('click', (event) => {
  const childerSelect = document.querySelector(`#${event.srcElement.id}`);
  const path = window.location.pathname;
  const href = event.target.getAttribute('href');
  const arrAnchor = Array.from(
    childerSelect.parentElement.querySelectorAll('a')
  );

  arrAnchor.forEach((item) => {
    arrayDbCategory.loadStorage();
    const actualPath = path.substring(1) === '' ? 'balance' : path.substring(1);
    item.id === actualPath
      ? item.classList.add('text-indigo-400')
      : item.classList.remove('text-indigo-400');
  });

  if (event.target.id === 'openModalBtn') {
    arrayDbCategory.loadStorage();
    document.getElementById('modal').classList.remove('hidden');
  }
  if (event.target.id === 'close') {
    document.getElementById('modal').classList.add('hidden');
  }

  if (String(event.target.id).indexOf('-delete')) console.log(event.target.id);
  console.log(arrayDbCategory.allCategory());
});

document.addEventListener('submit', (event) => {
  event.preventDefault();
  if (event.target.id === 'add-category-form') {
    arrayDbCategory.addCategory(document.getElementById('new-category').value);
    arrayDbCategory.saveCategory();
    document.getElementById('new-category').value = '';
    arrayDbCategory.loadStorage();
    document.getElementById('modal').classList.add('hidden');
    console.log(arrayDbCategory.allCategory());
  }
});
