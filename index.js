const addBtn = document.querySelector('.addBtn');
const listArr = [];

const delListItem = (el) => {
  el.target.parentElement.remove();
};
const createCloseBtn = (listEl) => {
  let span = document.createElement('SPAN');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  span.onclick = delListItem;
  listEl.appendChild(span);
};
const checkedItem = (el) => {
  if (el.target.tagName === 'LI') {
    el.target.classList.toggle('checked');
  }
};

const newElement = () => {
  const inputValue = document.getElementById('myInput').value;
  const isInList = listArr.some((el) => {
    return el.text === inputValue;
  });
  if (inputValue === '') {
    alert('You must write something!');
  } else if (isInList) {
    alert('list alredy has this item');
  } else {
    const t = document.createTextNode(inputValue);
    const newListItem = {
      item: document.createElement('li'),
      text: inputValue,
    };
    listArr.push(newListItem);
    newListItem.item.appendChild(t);
    createCloseBtn(newListItem.item);
    newListItem.item.addEventListener('click', checkedItem, false);
    document.getElementById('myUl').appendChild(newListItem.item);
  }
  document.getElementById('myInput').value = '';
};

addBtn.addEventListener('click', newElement, false);
