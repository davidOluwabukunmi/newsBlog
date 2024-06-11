// Javascript for tab navigation horizontal scroll buttons

const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    // console.log("1.", scrollLeftValue);
    let scrollablewidth = tabMenu.scrollWidth - tabMenu.clientWidth;
    // console.log("2.",scrollablewidth);

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollablewidth > scrollLeftValue ? "block" : "none";
}



btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;
    // IconVisibility();
    setTimeout(() => IconVisibility(), 50);
});



btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    // IconVisibility();
    setTimeout(() => IconVisibility(), 50);
});


window.onload = function () {
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}


window.onresize = function () {
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

    let scrollLeftValue = Math.round(tabMenu.scrollLeft);

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}

// Javascript to make the tab navigation draggable 

let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
    if (!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    IconVisibility();
    tabMenu.classList.add("dragging");
});


document.addEventListener("mouseup", () => {
    activeDrag = false;
    tabMenu.classList.remove("dragging");
});

tabMenu.addEventListener("mousedown", () => {
    activeDrag = true;
});












// TO VIEW TAB CONTENT ON EVERY CLICK

const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function (tabBtnClick) {
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active")
    });

    tabs.forEach((tab) => {
        tab.classList.remove("active");
    })

    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
};

// tabBtns.forEach((tabBtn, i) => {
//     tabBtn.addEventListener("click", () => {
//         tab_Nav(i);
//     });
// });
















// THE TOP HEADER OPACITY




window.addEventListener('scroll', function () {
    var header = document.querySelector('.header-top');
    if (window.pageYOffset > 0) {
        header.style.opacity = '0.7';
    } else {
        header.style.opacity = '1';
    }
});














// SHARE OPTION LIST

const shareOption = document.querySelector('.share-option');

document.querySelector('.share-button').addEventListener('click',
    function () {
        this.classList.toggle('active');
        shareOption.classList.toggle('active');
    });










/// DATE QUERIES 


function getCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Africa/Lagos' };
    return currentDate.toLocaleDateString('en-US', options);
}

document.getElementById('date').textContent = getCurrentDate();






// THE BREAKING ARTICLE CARD

const articleCard = document.querySelector(".article-card");
const popup = document.querySelector("#popup");
const popupCloseBtn = document.querySelector(".popup-close-btn");
const popupCloseIcon = document.querySelector(".popup-close-icon");

articleCard.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn")) {
        const item = event.target.closest(".article-card");
        const h3 = item.querySelector(".article-title").innerHTML;
        const readMoreCont = item.querySelector(".read-more-content").innerHTML;
        popup.querySelector("h3").innerHTML = h3;
        popup.querySelector(".popup-body").innerHTML = readMoreCont;

        popup.classList.add("open");
    }
});

popupCloseBtn.addEventListener("click", function() {
    popup.classList.remove("open");
});

popupCloseIcon.addEventListener("click", function() {
    popup.classList.remove("open");
});

popup.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.classList.remove("open");
    }
});



const cards = document.querySelectorAll(".card");





//  DISABLE SEE MORE FUNCTION ON THE TEXT CONTENTS THAT THE HEIGHT IS LESS THAN THE MINIMUM VISIBLE HEIGHT OF A TEXT CONTENT ON PAGE LOAD



window.onload = function(){
    cards.forEach((card) => {
        let seeMoreBtn = card.querySelector(".see-more-btn");
        let textContent = card.querySelector(".card-content .text");

        if(textContent.scrollHeight == textContent.clientHeight){
            seeMoreBtn.style.display = "none";
            textContent.style.height = "fit-content";
        }else {
            card.classList.add("gradient");
        }
    })
}



//  SEE MORE FUNCTION ON CLICK THE SEE MORE BUTTON ON EACH CARD.

cards.forEach((card) => {
    let seeMoreBtn = card.querySelector(".see-more-btn");
    let textContent = card.querySelector(".card-content .text");

    seeMoreBtn.addEventListener("click", () => {
        card.classList.toggle("active");
        card.classList.toggle("gradient");

        if(card.classList.contains("active")){
            seeMoreBtn.innerHTML = "See Less";
            textContent.style.height = textContent.scrollHeight + "px";
        }else{
            seeMoreBtn.innerHTML = "See More";
            textContent.style.height = "100px";
        }
    })
})


/// VIDEO CHANGING PART

let videoList = document.querySelectorAll('.video-list-container .list');


videoList.forEach(vid => {
    vid.onclick = () => {
       let src = vid.querySelector('.list-video').src;
       let title = vid.querySelector('.list-title').innerHTML;
       document.querySelector('.main-video-container .main-video').src = src;
       document.querySelector('.main-video-container .main-video').play();
       document.querySelector('.main-video-container .main-video-title').innerHTML = title;

       
    };
});


// Get all list elements
const listItems = document.querySelectorAll('.video-container .video-list-container .list');

// Add click event listener to each list item
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all list items
    listItems.forEach((listItem) => {
      listItem.classList.remove('active');
    });

    // Add 'active' class to clicked list item
    item.classList.add('active');
  });
});










// document.addEventListener('DOMContentLoaded', function() {
//     const likeIcon = document.querySelector('.like-icon');

//     likeIcon.addEventListener('click', function() {
//         const currentColor = window.getComputedStyle(likeIcon).getPropertyValue('color');

//         if (currentColor === 'rgb(0, 0, 0)') {
//             likeIcon.style.color = 'red';
//         } else {
//             likeIcon.style.color = 'black';
//         }
//     });
// });


//  LIKE OPTION WHEN YOU LIKE AND DISLIKE ON THE PAGE 


const likeIcon = document.querySelector('.like-icon');
  const dislikeIcon = document.querySelector('.dislike-icon');
  const likedIcon = document.querySelector('.liked');
  const dislikedIcon = document.querySelector('.disliked');

  let likeCount = 0;
  let dislikeCount = 0;

  likeIcon.addEventListener('click', () => {
    likeCount++;
    likedIcon.style.display = 'inline';
    dislikedIcon.style.display = 'none';
    likeIcon.style.display = 'none';
    dislikeIcon.style.display = 'inline';
    console.log('Liked:', likeCount);
  });

  dislikeIcon.addEventListener('click', () => {
    dislikeCount++;
    dislikedIcon.style.display = 'inline';
    likedIcon.style.display = 'none';
    dislikeIcon.style.display = 'none';
    likeIcon.style.display = 'inline';
    console.log('Disliked:', dislikeCount);
  });
















































// const carouselRow = document.querySelector('.slides-row');
// const carouselSlides = document.getElementsByClassName('slide');
// const dots = document.getElementsByClassName('dot');
// const nextBtn  = document.querySelector('.next');
// const prevBtn  = document.querySelector('.prev');
  

// let index = 1;
// var width; 

// // width = carouselSlides[0].clientWidth;
// // carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)';


// function slideWidth(){
//     width = carouselSlides[0].clientWidth;
// }
// slideWidth();

// window.addEventListener('resize', slideWidth);
// carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)';


// // NEXT 
// nextBtn.addEventListener('click', nextSlide);
// function nextSlide(){
//     if(index >= carouselSlides.length - 1){return};
//     carouselRow.style.transition = 'transform 0.4s ease-out';
//     index++;
//     carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)';
//     dotsLabel(); 
// };


// // PREVIOUS
// prevBtn.addEventListener('click', prevSlide);
// function prevSlide(){
//     if(index <= 0){return};
//     carouselRow.style.transition = 'transform 0.4s ease-out';
//     index--;
//     carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)';
//     dotsLabel(); 
// }



// // // return to first slide when reaches the last slide 

// carouselRow.addEventListener('transitionend', function () {
//     if (index === carouselSlides.length - 1) {
//       carouselRow.style.transition = 'none';
//       index = 1;
//       carouselRow.style.transform = 'translateX(' + -width * index + 'px)';
//       dotsLabel();
//       setTimeout(function () {
//         carouselRow.style.transition = 'transform 4s ease-out';
//       }, 50);
//     }
//     if (index === 0) {
//       carouselRow.style.transition = 'none';
//       index = carouselSlides.length - 2;
//       carouselRow.style.transform = 'translateX(' + -width * index + 'px)';
//       dotsLabel();
//       setTimeout(function () {
//         carouselRow.style.transition = 'transform vf4s ease-out';
//       }, 50);
//     }
//   });
  

// // // Auto Sliding 

// function autoslide(){
//     deleteInterval = setInterval(timer, 3000);
//     function timer(){
//         nextSlide();
//     }
// }
// autoslide();


// // Stop Auto sliding when mouse is over 
// const mainContainer = document.querySelector('.carousel-container');

// mainContainer.addEventListener('mouseover', function(){
//     clearInterval(deleteInterval);
// });

// // Resume sliding when mouse is out 


// mainContainer.addEventListener('mouseout', autoslide);



// function dotsLabel() {
//     for(i = 0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace('active', '');
//     }
//     dots[index - 1].className += ' active';
// }




// THIS IS THE CAROUSEL SIDE OF THE IMAGE CARD TO CONTAIN MULTIPLE IMAGE ON A CARD


const carouselRow = document.querySelector('.slides-row');
const carouselSlides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 1;
let width;

function slideWidth() {
  width = carouselSlides[0].clientWidth;
}
slideWidth();

window.addEventListener('resize', slideWidth);
carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';

nextBtn.addEventListener('click', nextSlide);

function nextSlide() {
  if (index >= carouselSlides.length - 1) {
    return;
  }
  index++;
  carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
  dotsLabel();
}

prevBtn.addEventListener('click', prevSlide);

function prevSlide() {
  if (index <= 0) {
    return;
  }
  index--;
  carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
  dotsLabel();
}

carouselRow.addEventListener('transitionend', function () {
  if (index === carouselSlides.length - 1) {
    carouselRow.style.transition = 'none';
    index = 1;
    carouselRow.style.transform = 'translateX(' + -width * index + 'px)';
    dotsLabel();
    setTimeout(function () {
      carouselRow.style.transition = 'transform 0.4s ease-out';
    }, 50);
  }
  if (index === 0) {
    carouselRow.style.transition = 'none';
    index = carouselSlides.length - 2;
    carouselRow.style.transform = 'translateX(' + -width * index + 'px)';
    dotsLabel();
    setTimeout(function () {
      carouselRow.style.transition = 'transform 0.4s ease-out';
    }, 50);
  }
});

function dotsLabel() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[index - 1].classList.add('active');
}

// Other code related to auto sliding and mouse events...






const carouselContainer = document.querySelector('.carousel-container');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

carouselContainer.addEventListener('mousedown', startDrag);
carouselContainer.addEventListener('touchstart', startDrag);
carouselContainer.addEventListener('mouseup', endDrag);
carouselContainer.addEventListener('touchend', endDrag);
carouselContainer.addEventListener('mousemove', drag);
carouselContainer.addEventListener('touchmove', drag);

function startDrag(e) {
  if (e.type === 'touchstart') {
    startPosition = e.touches[0].clientX;
  } else {
    startPosition = e.clientX;
  }
  isDragging = true;
}

function drag(e) {
  if (!isDragging) return;
  
  let currentPosition = 0;
  if (e.type === 'touchmove') {
    currentPosition = e.touches[0].clientX;
  } else {
    currentPosition = e.clientX;
  }
  
  currentTranslate = prevTranslate + currentPosition - startPosition;
}

function endDrag() {
  prevTranslate = currentTranslate;
  isDragging = false;
}

function updateSliderPosition() {
  carouselRow.style.transform = `translateX(${currentTranslate}px)`;
}

// Add the 'updateSliderPosition' function to the 'nextSlide' and 'prevSlide' functions as well, after updating the 'currentTranslate' value.

// Other code...

function nextSlide() {
    if (index >= carouselSlides.length - 1) {
      // Check if it's the last right slide
      carouselRow.style.transition = 'transform 0.4s ease-out';
      carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
      index++;
      setTimeout(function () {
        carouselRow.style.transition = 'none';
        index = 1;
        carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
        dotsLabel();
      }, 400);
      return;
    }
    index++;
    carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
    dotsLabel();
  }
  
  function prevSlide() {
    if (index <= 0) {
      // Check if it's the first left slide
      carouselRow.style.transition = 'transform 0.4s ease-out';
      carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
      index--;
      setTimeout(function () {
        carouselRow.style.transition = 'none';
        index = carouselSlides.length - 2;
        carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
        dotsLabel();
      }, 400);
      return;
    }
    index--;
    carouselRow.style.transform = 'translateX(' + (-width * index) + 'px)';
    dotsLabel();
  }
  





$(".load-more-card").slice(0, 3).show();

$("")























































// const carouselRow = document.querySelector('.slides-row');
// const carouselSlides = document.getElementsByClassName('slide');
// const dots = document.getElementsByClassName('dot');
// const nextBtn = document.querySelector('.next');
// const prevBtn = document.querySelector('.prev');

// let index = 1;
// let width = carouselSlides[0].clientWidth;

// carouselRow.style.transform = 'translateX('+ (-width * index) + 'px)';

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);

// function nextSlide() {
//   if (index >= carouselSlides.length - 1) {
//     return;
//   }
//   carouselRow.style.transition = 'transform 0.4s ease-out';
//   index++;
//   carouselRow.style.transform = 'translateX('+ (-width * index) + 'px)';
//   dotsLabel();
// }

// function prevSlide() {
//   if (index <= 0) {
//     return;
//   }
//   carouselRow.style.transition = 'transform 0.4s ease-out';
//   index--;
//   carouselRow.style.transform = 'translateX('+ (-width * index) + 'px)';
//   dotsLabel();
// }

// carouselRow.addEventListener('transitionend', function() {
//   if (carouselSlides[index].id === 'firstImageDuplicate') {
//     carouselRow.style.transition = 'none';
//     index = carouselSlides.length - 2;
//     carouselRow.style.transform = 'translateX('+ (-width * index) + 'px)';
//     dotsLabel();
//   }
//   if (carouselSlides[index].id === 'lastImageDuplicate') {
//     carouselRow.style.transition = 'none';
//     index = 1;
//     carouselRow.style.transform = 'translateX('+ (-width * index) + 'px)';
//     dotsLabel();
//   }
// });

// function dotsLabel() {
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].classList.remove('active');
//   }
//   dots[index - 1].classList.add('active');
// }





 





// const articleCard = document.querySelector(".article-card");
// const popup = document.querySelector(".popup-box");

// articleCard.addEventListener("click", function(event){
//     if(event.target.tagName.toLowerCase() == "button"){
//         const item = event.target.parentElement;
//         const h3 = item.querySelector("h3").innerHTML;
//         const readMoreCont = item.querySelector(".read-more-content").innerHTML;
//         popup.querySelector("h3").innerHTML = h3;
//         popup.querySelector(".popup-body").innerHTML = readMoreCont;

//         popupBox();
//     }
// }); 


  
// function popupBox(){
//   popup.classList.toggle("open");
// }



// const articleCard = document.querySelector(".article-card");
// const popup = document.querySelector(".popup-box");

// articleCard.addEventListener("click", function(event){
//     if(event.target.tagName.toLowerCase() == "button"){
//         const item = event.target.parentElement;
//         const h3 = item.querySelector("h3").innerHTML;
//         const readMoreCont = item.querySelector(".read-more-content").innerHTML;
//         // console.log("h3:", h3);
//         // console.log("readMoreCont:", readMoreCont);
//         popup.querySelector("h3").innerHTML = h3;
//         popup.querySelector(".popup-body").innerHTML = readMoreCont;

//         popupBox();
//     }
// }); 

// function popupBox(){
//   popup.classList.toggle("open");
// }


// const articleCard = document.querySelector(".article-card");
// const popup = document.querySelector(".popup-box");
// const popupCloseBtn = document.querySelector(".popup-close-btn");
// const popupCloseIcon = document.querySelector(".popup-close-icon");

// articleCard.addEventListener("click", function (event) {
//     if (event.target.classList.contains("btn")) {
//         const item = event.target.closest(".article-card");
//         const h3 = item.querySelector(".article-title").innerHTML;
//         const readMoreCont = item.querySelector(".read-more-content").innerHTML;
//         popup.querySelector("h3").innerHTML = h3;
//         popup.querySelector(".popup-body").innerHTML = readMoreCont;

//         popup.classList.add("open");
//     }
// });


// popupCloseBtn.addEventListener("click", function () {
//     popup.classList.remove("open");
// });
// popupCloseIcon.addEventListener("click", function(){
//     popup.classList.remove("open");
// });

// popup.addEventListener("click", function(event){
//     if(event.target == popup){
//         popupBox();
//     }
// });

