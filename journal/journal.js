const menuIcon = document.getElementById("menu-icon");
const menuContainer = document.getElementById("menu-container");
const indicator = document.querySelector('.indicator');
const indicatorWrapper = document.querySelector('.indicator-wrapper');


menuIcon.addEventListener("click", function () {
    if (menuContainer.classList.contains("open")) {
        menuContainer.classList.remove("open");
        menuIcon.innerHTML = "menu"; // Hamburger icon
    } else {
        menuContainer.classList.add("open");
        menuIcon.innerHTML = "close"; // Close icon
    }
});

const dropdownBtn = document.getElementById("dropdown-button");
const dropdownList = document.getElementById("dropdown-list");
const dropdownArrow = document.getElementById("dropdown-arrow");

dropdownBtn.addEventListener("click", function () {
    if (dropdownList.classList.contains("open")) {
        dropdownList.classList.remove("open");
        dropdownArrow.innerHTML = "stat_minus_1"; // arrow down
    } else {
        dropdownList.classList.add("open");
        dropdownArrow.innerHTML = "stat_1"; // arrow up
    }
});

const navContainer = document.querySelector('.top-nav-container');
const navBrand = document.querySelector('.brand');
const navBtnToggle = document.querySelector('.nav-button-toggle');
const navMiddle = document.querySelector('.mid-nav');
const navMenuLinks = document.querySelector('.nav-menu-links');

window.addEventListener('scroll', () => {

    // top-nav-background-appear
    let scrollTop = window.scrollY;

    if (scrollTop < 400) {
        navContainer.style.height = `${scrollTop / 5}px`;
        navMenuLinks.style.opacity = scrollTop / 400;
        navBrand.style.color = `rgb(${255 - (scrollTop / 400) * 105}, ${255 - (scrollTop / 400) * 105}, ${255 - (scrollTop / 400) * 105})`; // from white to gray
        navBtnToggle.style.color = `rgb(${255 - (scrollTop / 400) * 105}, ${255 - (scrollTop / 400) * 105}, ${255 - (scrollTop / 400) * 105})`; // from white to gray
    } else if (scrollTop >= 400 && scrollTop < 800) {
        navContainer.style.height = `${40 + (scrollTop - 400) / 5}px`;
        navMenuLinks.style.opacity = 1;
        navBrand.style.color = `rgb(${150 - ((scrollTop - 400) / 400) * 142}, ${150 - ((scrollTop - 400) / 400) * 122}, ${150 - ((scrollTop - 400) / 400) * 92})`; // from gray to black
        navBtnToggle.style.color = `rgb(${150 - ((scrollTop - 400) / 400) * 142}, ${150 - ((scrollTop - 400) / 200) * 122}, ${150 - ((scrollTop - 400) / 400) * 92})`; // from gray to black
    } else {
        navContainer.style.height = '80px';
        navMenuLinks.style.opacity = 1;
        navBrand.style.color = 'rgb(8, 28, 58)'; //black
        navBtnToggle.style.color = 'rgb(8, 28, 58)'; //black
    }

    if (scrollTop >= 400) {
        navMiddle.style.height = '80px';
    } else {
        navMiddle.style.height = '0';
    }


    //left-side-indicator-scroll
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // indicator-wrapper's height
    const wrapperHeight = indicatorWrapper.clientHeight - indicator.clientHeight;

    const scrollPercentage = scrollTop / docHeight;

    // indicator's position
    const indicatorPosition = scrollPercentage * wrapperHeight;
    indicator.style.top = `${indicatorPosition}px`;

});
