const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',


];
const listEl = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i += 1){
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredients[i];
  console.log(li);
 listEl.append(li);
}





// const listEl = document.querySelector('#ingredients');
// let liEl = '';
// for (let i = 0; i < ingredients.length; i += 1){
//   const li = document.createElement('li');
//   li.classList.add('item');
//   li.textContent = ingredients[i];
//   console.log(li);
//   liEl += li;
// }
// listEl.append(liEl);

