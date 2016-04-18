$( document ).ready(function() {
  smoothScroll.init();
  $("#email").attr("href", "mailto:hello@jooeycheng.me");
});

$( window ).load(function() {

});

particlesJS.load('particles', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});