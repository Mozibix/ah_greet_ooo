/* POP-UP VARIABLE*/
const popUpSec = document.querySelector("#pop");
const popUpSec1 = document.querySelector(".pop_up_box1");
const popUpSec2 = document.querySelector(".pop_up_box2");
const popUpSec3 = document.querySelector(".pop_up_box3");
const popUpSec4 = document.querySelector(".pop_up_box4");
const popUpSec5 = document.querySelector(".pop_up_box5");

/* POP-UP FUNCTIONS */

const toggleFadeClass1 = () => {
  popUpSec1.classList.toggle("fade");
  popUpSec2.classList.remove("fade");
  popUpSec3.classList.remove("fade");
  popUpSec4.classList.remove("fade");
  popUpSec5.classList.remove("fade");
};
const toggleFadeClass2 = () => {
  popUpSec2.classList.toggle("fade");
  popUpSec1.classList.remove("fade");
  popUpSec3.classList.remove("fade");
  popUpSec4.classList.remove("fade");
  popUpSec5.classList.remove("fade");
};
const toggleFadeClass3 = () => {
  popUpSec3.classList.toggle("fade");
  popUpSec1.classList.remove("fade");
  popUpSec2.classList.remove("fade");
  popUpSec4.classList.remove("fade");
  popUpSec5.classList.remove("fade");
};
const toggleFadeClass4 = () => {
  popUpSec4.classList.toggle("fade");
  popUpSec1.classList.remove("fade");
  popUpSec2.classList.remove("fade");
  popUpSec3.classList.remove("fade");
  popUpSec5.classList.remove("fade");
};
const toggleFadeClass5 = () => {
  popUpSec5.classList.toggle("fade");
  popUpSec1.classList.remove("fade");
  popUpSec2.classList.remove("fade");
  popUpSec3.classList.remove("fade");
  popUpSec4.classList.remove("fade");
};
popUpSec.style.display = "block";
setTimeout(() => {
  popUpSec.style.display = "block";
}, 100000);

setInterval(toggleFadeClass1, 1000);
setInterval(toggleFadeClass2, 2000);
setInterval(toggleFadeClass3, 4000);
setInterval(toggleFadeClass4, 8000);
setInterval(toggleFadeClass5, 9000);
