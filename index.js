const addBtn=document.querySelector('.addBtn');
var close = document.getElementsByClassName("close");
var myNodelist = document.getElementsByTagName("li");
var list = document.querySelector('ul');



const delListItem =(el)=>{
    el.target.parentElement.remove();
}
const hasInnerText=(colection,val)=>{
    let result=false;
    for (let i = 0; i < colection.length; i++) {
        if (colection[i].childNodes[0].data.toLowerCase()===val.toLowerCase()) {
            return true;
        } else {
            result=false;
        }
    }
    return result;
}
const newElement = () =>{
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    let Nodelist = document.getElementsByTagName("li");
    console.log(Nodelist);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something! or list alredy has this item");
    } else if(hasInnerText(Nodelist,inputValue)){
        alert("list alredy has this item");
    }else {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = delListItem;
    }
  }

const check=(el)=>{
    if (el.target.tagName === 'LI') {
        el.target.classList.toggle('checked');
      }
};
addBtn.addEventListener("click",newElement,false);
console.log(addBtn);
list.addEventListener('click', check, false);

for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}



