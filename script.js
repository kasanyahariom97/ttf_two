/*
    *License GPLv3
    You can use this library free of cost
*/

// Global Variables

const query = document.querySelector;
const queryAll = document.querySelectorAll;

// Small Screen Slide Menu

(function () {
  const actionBtn = document.querySelector("#op-nav-sm");
  const container = document.querySelector(".sm-nav-container");
  const mainNav = document.querySelector(".sm-nav");
  const navBtn = document.querySelector(".nav-icon")
  let showing = 0;
  actionBtn.addEventListener("click", () => {
    if (showing === 0) {
      container.style.animationName = "sm-nav-animation";
      container.style.animationDuration = "0.2s";
      mainNav.style.animationName = "sm-nav-animation";
      mainNav.style.animationDuration = "0.5s"
      navBtn.classList.add("open");
      showing = 1;
    } else {
      container.style.animationName = "sm-nav-animation-out";
      container.style.animationDuration = "0.5s";
      mainNav.style.animationName = "sm-nav-animation-out";
      mainNav.style.animationDuration = "0.3s";
      navBtn.classList.remove("open");
      showing = 0;
    }
  });
})();

// Small Screen Search Box

(function () {
  const searchBtn = document.querySelector("#searchsm-btn");
  const searchBox = document.querySelector(".sm-searchbox-container");
  const container = document.querySelector(".sm-search-container");
  const cancelSearch = document.querySelector(".sm-cancel-search");
  const mainInput = document.querySelector("#searchInput");
  let showing = 0;
  searchBtn.addEventListener("click", () => {
    if (showing === 0) {
      container.style.animationName = "sm-search-animation";
      container.style.animationDuration = "0.2s";
      searchBox.style.animationName = "sm-search-animation";
      searchBox.style.animationDuration = "0.5s"
      mainInput.focus();
      showing = 1;
    } else {
      searchBox.style.animationName = "sm-search-animation-out";
      showing = 0;
    }
  });
  cancelSearch.addEventListener("click", () => {
    container.style.animationName = "sm-search-animation-out";
    container.style.animationDuration = "0.5s";
    searchBox.style.animationName = "sm-search-animation-out";
    searchBox.style.animationDuration = "0.3s";
    showing = 0;
  });
})();
