//mobail menu
(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".mobail-menu");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      $(".menu").toggleClass("responsive");
    });
  }
 
})();


//slider


$(".slider").slick({
  infinite: true,
  autoplay: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  adaptiveHeight: true,
});
