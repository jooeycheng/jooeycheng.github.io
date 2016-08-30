$( document ).ready(function() {
  smoothScroll.init();
  $("#email").attr("href", "mailto:hello@jooeycheng.me");

  var helloAudio = new Audio('/assets/hello.mp3');

  $(document).on({
    mouseenter: function() {
      // $("#spinner").addClass("show");
      setTimeout(
        function() {
          $(".hello-container").addClass("adele");
          helloAudio.play();
          console.log("Yay! You found it! My effort is not wasted.");
        }, 1000);
    },
    mouseleave: function() {
      // $("#spinner").removeClass("show");
      $(".hello-container").removeClass("adele");
      helloAudio.pause();
      helloAudio.currentTime = 0;
      ga('send', 'event', 'Eggs', 'Played', 'Adele Hello');
    }
  }, ".hello-text");

  // $(document).on('mousemove', function(e) {
  //   $('#spinner').css({
  //     left: e.pageX + 15,
  //     top:  e.pageY
  //   });
  // });

});

$( window ).load(function() {
  console.log("There's an easter egg on this page. Can you find it? ;)");
});

particlesJS.load('particles', 'assets/particles.json', function() {
  // console.log('callback - particles.js config loaded');
});