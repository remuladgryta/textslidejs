var lines = [];

function textslide(){
  let currentline = -1;
  let el;
  function nextline(){
    currentline = (currentline + 1) % lines.length;
    el = document.createElement('p');
    el.innerHTML = lines[currentline];
    el.className = 'in';
    el.addEventListener("animationend", listener);
    document.body.appendChild(el);
  }
  function listener(event){
    if (event.animationName === 'slidein'){
      el.className = 'scrl';
    }
    if (event.animationName === 'scrl'){
      el.className = 'out';
    }
    if (event.animationName === 'slideout'){
      el.parentNode.removeChild(el);
      nextline();
    }
  }
  nextline();
}
window.onload = function(){
  let messages_ta = document.querySelector('#messages');
  loadLines(messages_ta);
  textslide();
  messages_ta.addEventListener('input', e => loadLines(messages_ta));
}

function loadLines(textarea){
  lines = textarea.value.split('\n');
  for (i in lines){
    lines[i] = wrapLowercase(lines[i]);
  }
}

function wrapLowercase(text){
  pattern = /([^A-Z]+)/g; //Match all sequences of characters that are not uppercase.
  return text.replace(pattern, "<span class='lower'>$1</span>");
}
