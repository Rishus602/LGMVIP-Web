var myNodelist = document.getElementsByTagName("LI");
for (let node of myNodelist) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  node.appendChild(span);
}

var close = document.getElementsByClassName("close");
for (let element of close) {
  element.onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let element of close) {
    element.onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function clearList() {
    document.getElementById("myUL").innerHTML = "";
}