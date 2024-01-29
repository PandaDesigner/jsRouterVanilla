import dbCategory from '../categoryClass.js';

const arrayDbCategory = new dbCategory();

const newCategory = [
  'Alimentos',
  'Transporte',
  'Educación',
  'Entretenimiento',
  'Salud'
];

newCategory.forEach((category) => arrayDbCategory.addCategory(category));

export default arrayDbCategory;
