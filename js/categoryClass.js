//SECTION -  CRUD Category

const unaccentedText = (str) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

class dbCategory {
  constructor() {
    this.arrDB = [];
  }
  addCategory(category) {
    const existingCategory = this.arrDB.find(
      (item) => item.category === category
    );
    if (existingCategory) {
      console.log(
        'La categoría ya existe.',
        'background: red; color: white; padding: 4px 16px'
      );
      return;
    }

    this.arrDB = [...this.arrDB, { category }];
  }
  deleteCategory(category) {
    this.arrDB = this.arrDB.filter((item) => {
      console.log(item.category.toLowerCase());
      return unaccentedText(item.category.toLowerCase()) != category;
    });
  }
  saveCategory() {
    localStorage.setItem('category', JSON.stringify(this.arrDB));
  }

  loadStorage() {
    localStorage.getItem('category')
      ? (this.arrDB = JSON.parse(localStorage.getItem('category')))
      : (this.arrDB = []);
  }

  allCategory() {
    return this.arrDB;
  }
}

export default dbCategory;
