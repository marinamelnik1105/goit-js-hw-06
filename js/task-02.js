const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',


];

const listEl = document.querySelector('#ingredients');
 const liEl = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = ingredient;
   console.log(li)
   return li;
  })

listEl.append(...liEl)


