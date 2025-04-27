var sidenavbar = document.querySelector(".side-navbar-links")

function shownavbar() {
  sidenavbar.style.left = "0"
}

function closenavbar() {
  sidenavbar.style.left = "-60%"
}
function closepop() {
  document.querySelector(".add").style.display = "none";
}


// like button
var likeButtons = document.querySelectorAll(".likebutton");

likeButtons.forEach(function (button) {
  var emptyHeart = button.querySelector(".heartempty");
  var fillHeart = button.querySelector(".fillempty");

  emptyHeart.addEventListener("click", function () {
    emptyHeart.style.display = "none";
    fillHeart.style.display = "block";
  });

  fillHeart.addEventListener("click", function () {
    fillHeart.style.display = "none";
    emptyHeart.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {



  const btnLeft = document.querySelector(".btnlf");
  const btnRight = document.querySelector(".btnrt");
  const images = document.querySelectorAll(".hero-image");

  let currentIndex = 0;

  function showImage(index) {
    images[currentIndex].classList.remove("active");
    currentIndex = index;
    images[currentIndex].classList.add("active");
  }

  btnRight.addEventListener("click", function () {
    let nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  });

  btnLeft.addEventListener("click", function () {
    let prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
  });

});

window.addEventListener("scroll", function () {
  var elements = this.document.querySelectorAll(".initial-scroll-animate")
  elements.forEach((el) => {
    windowHeight = window.innerHeight
    var elbound = el.getBoundingClientRect()


    console.log(windowHeight)
    console.log(elbound.top)
    if (windowHeight > elbound.top - 100) {
      el.classList.remove("reveal-scroll-animate")

    }

  })

})