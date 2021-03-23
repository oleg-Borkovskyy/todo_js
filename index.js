const addBtn = document.querySelector('.addBtn');
const listArr = [];

const delListItem = (el) => {
  el.target.parentElement.remove();
  listArr.splice(
    listArr.indexOf((arrItem) => {
      return arrItem.item === el;
    }),
    1,
  );
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
  const inputValue = document.querySelector('.myInput').value;
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
    document.querySelector('.myUl').appendChild(newListItem.item);
  }
  document.querySelector('.myInput').value = '';
};

addBtn.addEventListener('click', newElement, false);
