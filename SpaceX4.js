const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-panel");

// Tabs
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Gets the data-target from the li
      const target = document.querySelector(tab.dataset.target);
    
      tabs.forEach((t) => {
        t.classList.remove("active");
      });
      tab.classList.add("active");
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


// Tab Variables
const tabsHs = document.querySelectorAll(".tab-hs");
const tabContentHs = document.querySelectorAll(".tab-panel-hs");

// Tabs
tabsHs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Gets the data-target from the li
      const target = document.querySelector(tab.dataset.target);
    
      tabsHs.forEach((t) => {
        t.classList.remove("active");
      });
      tab.classList.add("active");
      // ForEach used for every tab that has
      // the.tab-panel classe
      tabContentHs.forEach((tc) => {
        // Removes class "active" making invisible/Hidden
        tc.classList.remove("active");
      });
  
      // Add class "active" which contains css properties,
      // making it show whenever clicked
      target.classList.add("active");
    });
  });