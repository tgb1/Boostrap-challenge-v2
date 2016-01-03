$(document).ready(function() {
  // welcome
  console.log('script.js loaded');

  // variables
  var defaultFeaturedTitle = 1;
  var featuredTitleContent = 2;
  var swapperContent = 3;

  var titleCounter = defaultFeaturedTitle;

  // title content
  $('.chevron-left').click(
    function() {
      titlePrevContent = titleCounter;
      titleCounter--;

      if(titleCounter < 1) {
        titleCounter = featuredTitleContent;
      }

      $('.featured-' + titleCounter).css('display', 'inline');
      $('.featured-' + titlePrevContent).css('display', 'none');
    }
  );

  $('.chevron-right').click(
    function() {
      titlePrevContent = titleCounter;
      titleCounter++;

      if(titleCounter > featuredTitleContent) {
        titleCounter = 1;
      }

      $('.featured-' + titleCounter).css('display', 'inline');
      $('.featured-' + titlePrevContent).css('display', 'none');
    }
  );
  // swapper content
  $('.btn-swapper').click(
    function() {
      var number = $(this).attr('class').split(' ')[0];
      for (var i = 1; i <= swapperContent ; i++) {
        if(number != i) {
          $('.swapper-' + i).css('display', 'none');
          $('.' + i).addClass('btn-swapper-inactive');
        } else {
          $('.swapper-' + i).css('display', 'inline');
        }
      }
      $(this).removeClass('btn-swapper-inactive');
    }
  );

  // swapper content hover
  $('.swapper-col').hover(
    function() {
      $(this).addClass('swapper-col-hover');
    },
    function() {
      $(this).removeClass('swapper-col-hover');
    }
  );
});
