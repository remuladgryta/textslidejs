var lines = [];

function textslide(){
  let currentline = 0;
  let el = document.createElement('p');
  function listener(event){
    el.parentNode.removeChild(el);
    currentline = (currentline + 1) % lines.length;
    el = document.createElement('p');
    el.innerHTML = lines[currentline];
    el.addEventListener("animationend", listener);
    document.body.appendChild(el);
  }
  el.innerHTML = lines[currentline];
  el.addEventListener("animationend", listener);
  document.body.appendChild(el);
}
window.onload = function(){
  let messages_ta = document.querySelector('#messages');
  lines = messages_ta.value.split('\n');
  if(lines.length < 2 && lines[0] == ''){
    lines = ['This', 'Is', 'A proof of concept'];
  }
  textslide();
  messages_ta.addEventListener('input', function(e){
    lines = messages_ta.value.split('\n');  
  });
}
