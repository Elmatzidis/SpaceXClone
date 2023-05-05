// Dragon tab images

const superDraco=document.getElementById("show-superdraco-img")
const draco=document.getElementById("show-draco-img")

// Btns Dragon

const btn3 = document.getElementById("btn-change-draco");
const btn4 = document.getElementById("btn-change-superdraco");

// Draco Change img

btn3.onclick = function () {
  draco.style.display = "none";
  superDraco.style.display = "block";
};

btn4.onclick = function () {
  draco.style.display = "block";
  superDraco.style.display = "none";
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