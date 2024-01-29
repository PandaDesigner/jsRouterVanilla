import { dbBlance } from '../itemBalance.js';

const $balance = new dbBlance();

const testDB = [
  {
    description: 'Venta de libros',
    type: 'profit',
    category: 'Ventas',
    time: new Date(),
    amount: 500
  },
  {
    description: 'Gasto en comida rápida',
    type: 'loss',
    category: 'Alimentos',
    time: new Date(),
    amount: 20
  },
  {
    description: 'Ingreso por servicios de consultoría',
    type: 'profit',
    category: 'Servicios',
    time: new Date(),
    amount: 1000
  },
  {
    description: 'Gasto en transporte público',
    type: 'loss',
    category: 'Transporte',
    time: new Date(),
    amount: 50
  },
  {
    description: 'Venta de muebles usados',
    type: 'profit',
    category: 'Ventas',
    time: new Date(),
    amount: 300
  },
  {
    description: 'Pago de factura de electricidad',
    type: 'loss',
    category: 'Servicios públicos',
    time: new Date(),
    amount: 80
  }
];

testDB.forEach((item) => $balance.addBalance(...item));

export default $balance;
