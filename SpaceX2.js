//All variables
const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");

const video = document.getElementById("reveal-video");

let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);
video.disablePictureInPicture = true;

// Tab Variables
const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-panel");


// Falcon Heavy tab images
const sealevel_img = document.querySelector("#sealevel-img");
const vaccum_img = document.querySelector("#vaccum-img");

// Btns Falcon Heavy

const btn1 = document.getElementById("btn-sealevel");
const btn2 = document.getElementById("btn-vaccum");

// Falcon Heavy Change img

btn1.onclick = function () {
  sealevel_img.style.display = "none";
  vaccum_img.style.display = "block";
};

btn2.onclick = function () {
  sealevel_img.style.display = "block";
  vaccum_img.style.display = "none";
};

// Tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Gets the data-target from the li
    const target = document.querySelector(tab.dataset.target);
  
    // ForEach used for every tab that has
    // the.tab-panel classe
    tabContent.forEach((tc) => {
      // Removes class "active" making invisible/Hidden
      tc.classList.remove("active");
    });

    // Add class "active" which contains css properties,
    // making it show whenever clicked
    target.classList.add("active");
  });
});

//Menu
function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  menu.classList.toggle("show-menu");
}

//Scrolling counting/reseting rockets stats
function scrollPage() {
  const scrollPos = window.scrollY;
  console.log(window.scrollY);
  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
    //When 100 Y-units are scrolled counter starts
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
    //After 100 Y-units gets past the counter resests
  } else if (scrollPos > 1300 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

//Counting up for rockets stats
function countUp() {
  counters.forEach((counter) => {
    const updateCounter = () => {
      //Get count target
      const target = Number(counter.getAttribute("data-target"));
      //Get the current counter value
      const c = Number(counter.innerText);
      //Creates an increment
      const increment = target / 220;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 20);
        //Round up and sets current value
        //If the counter is less the target,inrease
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

//reseting stats
function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
