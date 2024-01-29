const itemCategoryTable = (category) => {
  return `
    <tr>
        <td id='${category.toLowerCase()}' class="p-2 pr-4">${category}</td>
        <td class="flex flex-row gap-2 justify-center items-center p-2">
          <button id='${category.toLowerCase()}-edit-category'class="btn-primary  pt-2">Editar</button>
          <button id='${category.toLowerCase()}-delete-category' class="btn-primary  bg-red-600 pt-2">Delete</button>
        </td>
    </tr>
  `;
};

export default itemCategoryTable;
