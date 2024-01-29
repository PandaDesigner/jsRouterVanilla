// components/home.js
import itemBalance from '../components/itemBalance.js';
import sectionTitle from '../components/sectionTitle.js';

const valueBalance = [
  { title: 'Ingresos', value: 10000 },
  { title: 'Gastos', value: 20000 },
  { title: 'Balance General', value: 50000 }
];

const Balance = () => {
  return `
            <div class="container w-full md:w-75 mx-auto h-[85vh] h-full md:flex flex-col p-4 md:p-0 
            justify-center items-center">
              <div class='w-full h-28 flex justify-end p-8 items-center'>
                <h2 class="text-3xl font-bold ">Welcome to <span class="text-red-500">Balance!</span></h2>
              </div>
                  <div class="w-full h-full md:flex md:flex-row flex-col p-4 rounded-2xl ">
                    <div class=' basis-auto md:basis-1/3  flex flex-col p-3 gap-3 drop-shadow-2xl md:flex-1 md:h-full'>
                          <div class="w-full md:basis-1/3 basis-auto   rounded-lg bg-white/90 drop-shadow-2xl overflow-hidden
                            backdrop-blur-sm">
                              ${sectionTitle('Balance General')}
                        <div class='flex flex-col p-2 gap-2 justify-between items-baseline '>
                            ${valueBalance
                              .map((item) =>
                                itemBalance(item.title, item.value)
                              )
                              .join('')}
                        </div>
                          </div>
                      <div class="w-full basis-auto md:basis-2/3 rounded-lg
                        bg-white/80 drop-shadow-2xl overflow-hidden md:h-full 
                          backdrop-blur-sm">
                          ${sectionTitle('Filtro')}
                          <div class='flex flex-col p-2 gap-2 justify-between items-baseline min-h-32'></div>
                          </div>
                        </div>
                        <div class='basis-2/3 p-3  '>
                        <div class='w-full overflow-hidden rounded-lg bg-white/80 drop-shadow-2xl h-full relative min-h-48 
                        backdrop-blur-sm'>
                    ${sectionTitle('Operaciones')}
                    <button class="btn-primary rounded-[50%] absolute bottom-6 right-6 text-6xl">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>  
         `;
};

export default Balance;
