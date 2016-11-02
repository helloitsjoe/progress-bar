

// function addCss(){
//   var cssStyle = document.createElement('style');
//   document.head.appendChild(cssStyle);
//   cssStyle.innerHTML = ".progress {position: fixed;top: 0;left: 0;width: 100%;height: 5px;background-color: #fff;}.fill {background-color: #2af;width: 0%;margin: 0px;}.filler {height: 20000px;width: 100%;background-color: #000;}";
// }

function addBar() {
  console.log('in addBar');
  var progressBox = document.createElement('div');
  var progressBar = document.createElement('div');
  progressBox.className = 'progress';
  progressBar.className = 'progress fill';
  document.body.appendChild(progressBox);
  progressBox.appendChild(progressBar);
}

function update() {
  var fillBar = document.querySelector('.fill');
  var pct = window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100;
  console.log(pct);
  fillBar.style.width = pct + '%';
}

document.addEventListener('DOMContentLoaded', addBar, false);
document.addEventListener('scroll', update);