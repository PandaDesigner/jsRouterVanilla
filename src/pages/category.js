import arrayDbCategory from '../../js/db/db.js';
import itemCategoryTable from '../components/itemCategoryTable.js';
import sectionTitle from '../components/sectionTitle.js';

const arreyCategoria = [...arrayDbCategory.allCategory()];
console.log(arreyCategoria);

const Category = () => {
  return `
  <div class="container w-50 md:w-85 mx-auto h-[85vh] flex flex-col p-4 md:p-0 justify-center items-center">

    <div class='w-full overflow-hidden rounded-lg bg-white/80 drop-shadow-2xl h-full relative min-h-48 backdrop-blur-sm mt-8'>
      ${sectionTitle('Categorys')}
          <button id='openModalBtn' class="btn-primary rounded-[50%] absolute bottom-6 right-6 text-6xl" >
                      +
          </button>
          <div class="w-full h-full flex flex-col p-4 gap-4">       
            <p>ingresa la primera categoria</p>
            <table class="table-auto">
            <thead>
              <tr>
                <th class="text-start w-[80%] p-4 bg-indigo-200">Categoria</th>
                <th class="w-[20%] p-4 bg-indigo-200">Action</th>
              </tr>
            </thead>
            <tbody>
                ${arrayDbCategory
                  .allCategory()
                  .map((item) => itemCategoryTable(item.category))
                  .join('')}
            </tbody>
            </table>
          </div>
          </div>
          </div>
          <div id='modal' 
        class='absolute w-[100%] h-[100%] flex 
        justify-center items-center top-0 left-0 
    bg-slate-600/60 backdrop-blur-sm  hidden' >
      <div class='w-[60%] min-h-[20%] bg-slate-100 rounded-lg drop-shadow-2xl relative p-8 flex justify-center items-center'>
      <button  id='close' class='btn-primary rounded-md absolute pt-2 top-4 right-4 z-10'>close</button>
      <form id='add-category-form' class="w-full">
      <label for="new-category" class="block text-sm font-medium leading-6 text-gray-900">new category</label>
          <div class="mt-2 flex flex-row items-center justify-center gap-4">
            <input type="text" name="new-category" id="new-category" autocomplete="new-category" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <button type="submit" id='add-category' class="btn-primary pt-2">
              Agregar
            </button>
          </div>
      </form>
      </div>
    </div> 
    
  `;
};

export default Category;
