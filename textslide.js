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
  lines = messages_ta.value.split('\n');
  if(lines.length < 2 && lines[0].trim() == ''){
    lines = ['This', 'Is', 'A proof of concept'];
  }
  textslide();
  messages_ta.addEventListener('input', function(e){
    lines = messages_ta.value.split('\n');  
  });
}
