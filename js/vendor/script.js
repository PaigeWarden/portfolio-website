function smoothScroll(target, duration){
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.offsetTop;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    // Code block 3
  }

  function easeInOutQuad(t, b, c, d) {
    // Code block 4
  }

  requestAnimationFrame(animation);
}

document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      var target = this.getAttribute("href");
      smoothScroll(target, 1000);
    });
  });
});
