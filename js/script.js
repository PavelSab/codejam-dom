const arrayOfTips = [
  ["lorem","Ffsdfsdfsdfds"]
  ,["title1","fsdfsd"]
  ,["title2","432423423"]
  ,["title3","xcxcfsdfsd"]
  ,["title4","xczcxzcxz"]
  ,["title5","Ffsdffsdfsdfsdfsdfds"]
  ,["title6","fsdgrehgfjhg"]
];

const tipsBlock = document.querySelector("#tips-block");
const tipTitle = document.querySelector("#tipTitle");
const tipContent = document.querySelector("#tipContent");
const tipCloser = document.querySelector("#tipCloser");
const tipTrigger = document.querySelector("#tipTrigger");
const tipNext = document.querySelector("#tipNext");
const tipPrev = document.querySelector("#tipPrev");
const tipBar = document.querySelector("#tipBar");

let dotCounter = 0; // position of tip in a bar
let i = 0; // it's counter for tips
setTip();
setActiveTip();

if(window.localStorage.getItem("disableBlockTip") != "true") {
  setTimeout (() => {
    tipsBlock.setAttribute("class", "tips-block");
  }, 5000);

  tipCloser.addEventListener("click", closerTip);
  tipNext.addEventListener("click", setNextTip);
  tipPrev.addEventListener("click", setPrevTip);
  document.addEventListener('keydown', arrowEvent);
}

function closerTip() {
  if(tipTrigger.checked === true) window.localStorage.setItem("disableBlockTip","true");
  tipsBlock.setAttribute("class","-invisible");

  tipCloser.removeEventListener("click", closerTip);
  tipNext.removeEventListener("click", setNextTip);
  tipPrev.removeEventListener("click", setPrevTip);
  document.removeEventListener('keydown', arrowEvent);
}

function arrowEvent() {
  const keyCode = event.keyCode;
  if (keyCode === 37) {
    setPrevTip();
  }
  if (keyCode === 39) {
    setNextTip();
  }
}

function setNextTip() {
  removeActiveTip()
  i++;
  dotCounter++;
  if(i >= arrayOfTips.length) i = 0;
  if(dotCounter > 5) dotCounter = 0;
  setTip();
  setActiveTip();
}

function setPrevTip() {
  removeActiveTip()
  i--;
  dotCounter--;
  if(i < 0) i = arrayOfTips.length-1;
  if(dotCounter < 0) dotCounter = 5;
  setTip();
  setActiveTip();
}

function setTip() {
  tipTitle.textContent = arrayOfTips[i][0];
  tipContent.textContent = arrayOfTips[i][1];
}

function removeActiveTip() {
  tipBar.children[dotCounter].removeAttribute("class");
}

function setActiveTip() {
  tipBar.children[dotCounter].setAttribute("class","-actived");
}
