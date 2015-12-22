$(document).ready(function() {
  //button functions
  $('.btn').hover(
    function() {
      $(this).append('<div class="green_arrow"></div>');
    },
    function() {
      $('.green_arrow').remove();
    }
  );


  //panel functions
  $('.btn').click(
    function() {
      var rightPannelClass = this.className.split(' ')[2];
      $('.' + rightPannelClass).css('visibility', 'visible');
    }
  );

  $('.close').click(
    function() {
      $('.panel').css('visibility', 'hidden');
    }
  );

  //post functions
  var numPosts = 3;
  var counter = 1;

  // test function
  $('.posts-container').click(
    function() {
      $('.post-' + counter).css('display', 'none');
      counter++;
      if (counter > numPosts) counter = 1;
      $('.post-' + counter).css('display', 'block');
    }
  );

  // $('.posts-container').on("swiperight", function() {
  //   $('.post-' + counter).css('display', 'none');
  //   counter++;
  //   if (counter > numPosts) {
  //     counter = 1;
  //   }
  //   $('.post-' + counter).css('display', 'block');
  // });

});
