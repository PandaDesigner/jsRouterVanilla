// router.js
import Balance from './pages/balance.js';
import Reports from './pages/report.js';
import Category from './pages/category.js';

const routes = {
  '/': Balance,
  '/reports': Reports,
  '/category': Category
};

const router = async () => {
  const content = document.getElementById('app');
  const path = window.location.pathname;

  const route = routes[path] || Balance;

  content.innerHTML = await route();
};

// Navegación inicial
window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', router);

// Navegación al hacer clic en los enlaces
document.addEventListener('click', (event) => {
  console.log(event);

  if (event.target.tagName === 'A') {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    window.history.pushState({}, href, window.location.origin + href);
    router();
  }
});
