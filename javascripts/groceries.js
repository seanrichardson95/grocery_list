/*
- Page contains form that asks for:
  - item's name (text)
  - quantity (text), optional, if left out, quantity === 1

- When submitted, new item will be added to grocery list
  - Item name: bananas, Quantity: 5, result: 5 bananas
  - put result in line item in ul

Print stylesheet, so that if we hit print preview, form is hidden, just
grocery list is visible (this part is optional)

*/

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let name = document.getElementById('name');
  let quantity = document.getElementById('quantity');
  let groceryList = document.getElementById('grocery-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let itemName = name.value;
    if (itemName !== '' && /^\d*$/g.test(quantity.value)) {
      let itemQuantity = quantity.value === '' ? '1' : quantity.value;

      let li = document.createElement('li');
      li.textContent = itemQuantity + ' ' + itemName;
      groceryList.appendChild(li);
    } else {
      alert('Please input a name into the Name input\n and an integer into the Quantity input');
    }

    form.reset();
  })
})
