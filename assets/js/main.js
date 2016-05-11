$( document ).ready(function() {
  smoothScroll.init();
  $("#email").attr("href", "mailto:hello@jooeycheng.me");

  var helloAudio = new Audio('/assets/hello.mp3');

  $(document).on({
    mouseenter: function() {
      // $("#spinner").addClass("show");
      $(".hello-container").addClass("adele");
      helloAudio.play();
    },
    mouseleave: function() {
      // $("#spinner").removeClass("show");
      $(".hello-container").removeClass("adele");
      helloAudio.pause();
      helloAudio.currentTime = 0;
    }
  }, ".hello-text");

  $(document).on('mousemove', function(e) {
    $('#spinner').css({
      left: e.pageX + 15,
      top:  e.pageY
    });
  });

});

$( window ).load(function() {

});

particlesJS.load('particles', 'assets/particles.json', function() {
  // console.log('callback - particles.js config loaded');
});