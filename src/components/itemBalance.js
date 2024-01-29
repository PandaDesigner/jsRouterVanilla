const itemBalance = (title = 'ingresos', value = '1.000.000,00') => {
  return `
  <div class='w-full flex items-center justify-between flex-row px-4 py-2'>
  <div><p>${title}</p></div>
  <div><p>+$ ${value}</p></div>
  </div>
  `;
};

export default itemBalance;
