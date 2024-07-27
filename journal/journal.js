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

// posts section
const postArr = [
    'url(../images/607dcc96ac469709cab4439e_post003.jpeg)',
    'url(../images/607dcc84b5be0d0f5f378014_post002.jpeg)',
    'url(../images/607dccc6e99d455d30eb59a4_post006.jpeg)',
    'url(../images/607dcd0c2a32b5e7275ff68b_post009.jpeg)',
];

const postImg = document.querySelectorAll('.journal-list-image .post-img');

postImg.forEach((div, index) => {
    if (postArr[index]) {
        div.style.backgroundImage = postArr[index];
    }
});


// browse journal
const journalArr = [
    {
        img: '../images/607dcc96ac469709cab4439e_post003.jpeg',
        title: '7 of the Best Examples of Beautiful Blog Design'
    },
    {
        img: '../images/607dcc84b5be0d0f5f378014_post002.jpeg',
        title: 'Designers Who Changed the Web'
    },
    {
        img: '../images/607dccc6e99d455d30eb59a4_post006.jpeg',
        title: "10 Web Design Blogs You Can't Miss"
    },
    {
        img: '../images/607dcd0c2a32b5e7275ff68b_post009.jpeg',
        title: '5 Principles Of Effective Web Design'
    },
    {
        img: '../images/607dccb5b05ec343aa84127a_post005.jpeg',
        title: 'How to improve Web Design Process'
    },
    {
        img: '../images/607dcce94ed8fef8efd42b7a_post010.jpeg',
        title: '14 Common Misconceptions About Web Design'
    },
];

const posts = document.querySelectorAll('.post');

posts.forEach((post, index) => {
    if (journalArr[index]) {
        const imgDiv = post.querySelector('.post-img');
        const titleH3 = post.querySelector('h3');
        imgDiv.style.backgroundImage = `url(${journalArr[index].img})`;
        titleH3.textContent = journalArr[index].title;
    }
});


// promise section
window.addEventListener('scroll', function () {
    const promiseSection = document.querySelector('.promise-section');
    const promiseBackground = document.querySelector('.promise-section .background');
    const promiseRect = promiseSection.getBoundingClientRect();

    if (promiseRect.top <= this.window.innerHeight && promiseRect.bottom >= 0) {
        const scrollProgress = (window.innerHeight - promiseRect.top) / (window.innerHeight + promiseRect.height);
        const translateY = (scrollProgress - 0.5) * 30;

        promiseBackground.style.transform = `translateY(${translateY}%))`
        promiseBackground.style.backgroundPositionY = `${50 + translateY}%`
    }
})