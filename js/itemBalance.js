import { v4 as uuidv4 } from 'uuid';

//SECTION -  CRUD balance

class dbBlance {
  constructor() {
    this.arrDB = [];
  }
  addBalance(
    description = '',
    type = '',
    category = '',
    time = '',
    amount = 0
  ) {
    const id = uuidv4();
    this.arrDB = [
      ...this.arrDB,
      { id, type, description, category, time, amount }
    ];
  }
  filterCategory(category) {
    return this.arrDB.filter((item) => item.category === category);
  }

  balanceByID(id) {
    return this.arrDB.filter((item) => item.id === id);
  }

  deleteBalance(id) {
    this.arrDB = this.arrDB.filter((item) => item.id !== id);
  }

  updateBalance(id, type, description, category, time, amount) {
    const updateArr = this.arrDB.map((item) =>
      item.id === id ? { id, type, description, category, time, amount } : item
    );
    this.arrDB = updateArr;
  }

  balnceAmount(type) {
    return this.arrDB.reduce((acc, item) => {
      item.type === type ? (acc += item.amount) : acc;
      return type === 'loss' ? acc * -1 : acc;
    }, 0);
  }

  allBalance(profit = 'profit', loss = 'loss') {
    const valueProfit = this.balnceAmount(profit);
    const valueLoss = this.balnceAmount(loss);

    return valueLoss > valueProfit
      ? valueLoss - valueProfit
      : valueProfit - valueLoss;
  }

  addViewBalance() {
    return this.arrDB;
  }
}

export default dbBlance;
