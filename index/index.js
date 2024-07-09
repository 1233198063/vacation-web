window.addEventListener("load", function () {
    const fill = document.querySelector(".preloader-fill");

    // Wait for the progress bar to complete
    fill.addEventListener('animationend', () => {
        // Hide the progress bar immediately after it fills
        document.querySelector(".preloader-indicator").style.display = "none";

        // Opening animation for the top and bottom parts of the preloader
        document.querySelector(".preloader-top").style.transform = "translateY(-100%)";
        document.querySelector(".preloader-bottom").style.transform = "translateY(100%)";

        // Hide the preloader after the animation
        setTimeout(() => {
            document.querySelector(".preloader").style.display = "none";
        }, 1000); // Delay to match the duration of the split screen animation
    });
});

document.addEventListener("DOMContentLoaded", function () {
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


    // hero background image slider
    const heroArr= [
        {
            img:'./images/607dcd3355581e17e093caed_011.jpeg',
            location:'Thessaloniki, Greece',
            details: 'starting at $ 6700'
        },
        {
            img:'./images/607dd011e021d45c28b27a10_021.jpeg',
            location:'Bahariya Oasis, Egypt',
            details: 'starting at $ 6400'
        },
        {
            img:'./images/607dcd2961c3e396968aac28_031.jpeg',
            location:'Denpasar, Indonesia',
            details: 'starting at $ 1900'
        }
    ];
    
    const heroNext = document.querySelector('.hero-slider-arrow.right');
    const heroPrev = document.querySelector('.hero-slider-arrow.left');
    const heroBg = document.querySelector('.slider-bg');
    const heroLocation = document.querySelector('.location-details .location');
    const locationDetails = document.querySelector('.location-details .details');

    let i = 0;

    function updateHero(index) {
        // Fade out effect
        heroBg.style.opacity = '0.9';
        
        // Wait for the fade out transition to complete before updating the content and fading in
        setTimeout(() => {
            heroBg.style.backgroundImage = `url(${heroArr[index].img})`;
            heroLocation.textContent = heroArr[index].location;
            locationDetails.textContent = heroArr[index].details;
            heroBg.style.opacity = '1';
        }, 300); 
    }
    
    updateHero(i);  // Initialize the content
    
    heroNext.addEventListener('click', () => {
        i++;
        if (i > heroArr.length - 1) {
            i = 0;
        }
        updateHero(i);
    });
    
    heroPrev.addEventListener('click', () => {
        i--;
        if (i < 0) {
            i = heroArr.length - 1;
        }
        updateHero(i);
    });


    // hero button wave
    const video = document.querySelector('.hero-video-button>video')
    const darkOuter = document.querySelector('.dark-outer')
    const lighteOuter = document.querySelector('.light-outer')
    const innerButton = document.querySelector('.inner-button')
    const innerPlay = document.querySelector('.inner-play')

    innerButton.addEventListener('mouseenter', function () {
        setTimeout(() => {
            innerButton.classList.add('active')
            innerPlay.classList.add('active')
            video.classList.add('active')
            darkOuter.classList.add('active')
            lighteOuter.classList.add('active')
        }, 200)
    })

    innerButton.addEventListener('mouseleave', function () {
        setTimeout(() => {
            innerButton.classList.remove('active')
            innerPlay.classList.remove('active')
            video.classList.remove('active')
            darkOuter.classList.remove('active')
            lighteOuter.classList.remove('active')

            // when mouseleave, the innerButton goes back to it's original position
            innerButton.style.transform = 'translate(0px,0px)'
        }, 200)
    })

    innerButton.addEventListener('mousemove', function (e) {
        const rect = innerButton.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        let x = e.clientX - centerX;
        let y = e.clientY - centerY;

        // Limit the movement range to -10 to 10 px
        x = Math.max(Math.min(x, 10), -10);
        y = Math.max(Math.min(y, 10), -10);

        innerButton.style.transform = `translate(${x}px,${y}px)`
    })


    // desinations section swiper
    const swiper = new Swiper('.swiper', {
        speed: 900,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 80,
        allowTouchMove: true,
        centeredSlides: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

    });

    // when mouse move on the swiper images
    const swiperSlides = document.querySelectorAll('.swiper-slide');
    
    swiperSlides.forEach(slide => {
        const layer = slide.querySelector('.gradient-overlay');
        const slideImg = slide.querySelector('img');

        layer.addEventListener('mousemove', (e) => {
            const rect = layer.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const moveX = (centerX - mouseX) / 50;
            const moveY = (centerY - mouseY) / 50;

            slideImg.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        });

        layer.addEventListener('mouseout', function() {
            slideImg.style.transform = 'scale(1)';
        });
    });

    //  benefits section drop down list
    const dropdownBtn2 = document.getElementById("dropdown-button-two");
    const dropdownList2 = document.getElementById("dropdown-list-two");
    const dropdownArrow2 = document.getElementById("dropdown-arrow-two");

    dropdownBtn2.addEventListener("click", function () {
        if (dropdownList2.classList.contains("open")) {
            dropdownList2.classList.remove("open");
            dropdownArrow2.innerHTML = "stat_minus_1"; // arrow down
        } else {
            dropdownList2.classList.add("open");
            dropdownArrow2.innerHTML = "stat_1"; // arrow up
        }
    });

});

