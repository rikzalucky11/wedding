// Get that hamburger menu cookin' //

var x = document.getElementById("bgSong");
var playing = false;

function playAudio() {
  x.play();
  playing = true;
}

function pauseAudio() {
  x.pause();
  playing = false;
}

function checkPlay() {
var playButton = document.getElementById("playIcon");
if (playing) {
    pauseAudio();
    playButton.classList.remove("fa-stop");
    playButton.classList.add("fa-play");
  } else {
    playAudio();
    playButton.classList.remove("fa-play");
    playButton.classList.add("fa-stop");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
      checkPlay();
    });
  });
  var ele = document.getElementById("modalOke");
  openModal(ele);
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function () {
  //   scrollFunction();
  //playAudio();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function ($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function () {
  var Body = $("body");
  Body.addClass("preloader-site");
});
