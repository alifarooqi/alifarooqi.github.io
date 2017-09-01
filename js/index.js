var ww = $("body").width();
if (ww < 767) {
  $("#intro-box").html('<h1 id="hWorld"> Hello World! </h1><div class="row"><div class="col-xs-7 col-md-8"><h2 id="meName">M. Ali<br>Farooqi</h2></div><div class="col-xs-5 col-md-4"><img src="http://drive.google.com/uc?export=view&id=0BxSjn7LtwFMhSkEwakVzb0tqNFk" alt="Ali" class="img-responsive" id="mePhoto"></div></div><p style="text-align: left;">I am a second-year Computer Science student, studying on full scholarship at The University of Hong KOng. I am a self-taught front-end web developer certified by <em><a href="https://www.freecodecamp.org/alifarooqi/front-end-certification" target="_blank" style="color:#bbb">Free Code Camp</a></em>.</p>');
  $("#section1").html('<div class="horizontal-scrolling" id="slide0"><h1>Portfolio</h1><h2>Web Development projects</h2><div class="row" id="portfolioContainer"><div class="col-xs-12"><div class="thumbnail"><a href="https://codepen.io/ali-farooqi/full/RZgExb" target="_blank"><img src="https://preview.ibb.co/ejxyBk/Portfolio_Tic_Tac_Toe.jpg" alt="TicTacToe" style="width:100%"><div class="caption"><p><b>Tic Tac Toe</b><br> Coded a game of Tic Tac Toe, which is impossible to win by human on Difficult mode.</p></div></a></div></div></div></div><div class="horizontal-scrolling" id="slide1"><h1>Portfolio</h1><h2>Web Development projects</h2><div class="row" id="portfolioContainer"><div class="col-xs-12"><div class="thumbnail"><a href="https://codepen.io/ali-farooqi/full/VzXawr" target="_blank"><img src="https://preview.ibb.co/dw7bxQ/Portfolio_S_Game.jpg" alt="S_Game" border="0" style="width:100%"><div class="caption"><p><b>Simon Game&reg;</b><br>Brought back the old Simon Game&reg; to life in a digital form.</p></div></a></div></div></div></div><div class="horizontal-scrolling" id="slide2"><h1>Portfolio</h1><h2>Web Development projects</h2><div class="row" id="portfolioContainer"><div class="col-xs-12"><div class="thumbnail"><a href="https://codepen.io/ali-farooqi/full/ZymOxx" target="_blank"><img src="https://preview.ibb.co/i1udBk/Portfolio_Weather.jpg" alt="Weather App" border="0" style="width:100%"><div class="caption"><p><b>Weather App</b><br>An app that shows the current weather conditions in your area.</p></div></a></div></div></div></div><div class="horizontal-scrolling" id="slide3"><h1>Portfolio</h1><h2>Web Development projects</h2><div class="row" id="portfolioContainer"><div class="col-xs-12"><div class="thumbnail"><a href="https://codepen.io/ali-farooqi/full/MveKoy" target="_blank"><img src="https://preview.ibb.co/grBEj5/Portfolio_Calculator.jpg" alt="Calculator" border="0" style="width:100%"><div class="caption"><p><b>Calculator</b><br>A simple calculator that can add, subtract, multiply and divide integers and floating points.</p></div></a></div></div></div></div><div class="horizontal-scrolling" id="slide4"><h1>Portfolio</h1><h2>Web Development projects</h2><div class="row" id="portfolioContainer"><div class="col-xs-12"><div class="thumbnail"><a href="https://codepen.io/ali-farooqi/full/YxpVMM" target="_blank"><img src="https://preview.ibb.co/fDOicQ/Portfolio_Pomodoro.jpg" alt="Pomodoro Clock" border="0" style="width:100%"><div class="caption"><p><b>Pomodoro Clock</b><br>The Pomodoro Technique is a time management method, which uses a timer to break down work into intervals separated by short breaks.</p></div></a></div></div></div></div><div class="horizontal-scrolling" id="slide5"><h1>Portfolio</h1><h2>Web Development projects</h2><div class="row" id="portfolioContainer"><div class="col-xs-12"><div class="thumbnail"><a href="https://codepen.io/ali-farooqi/full/RZgExb" target="_blank"><img src="https://preview.ibb.co/kqTicQ/Portfolio_Wikipedia.jpg" alt="Wikipedia" border="0" style="width:100%"><div class="caption"><p><b>Wikipedia Viewer</b><br>Searches Articles on Wikipedia, and returns top 10 matches and their links.</p></div></a></div></div></div></div></div>')
}

// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});


// hide menu when clicking outside the menu
$("html").click(function(e) {
   if(!$(e.target).closest('header').length) {
        $header_top.removeClass('open-menu');
    }
});

// hide menu when clicking on the menu items or the logo
$('h1, #menu li a').click(function(){
  $header_top.removeClass('open-menu');
});

// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#348899', '#F2AE72'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  anchors: ['firstSection', 'secondSection', 'thirdSection'],
  menu: '#menu',
  scrollBar: true,
  scrollingSpeed: 1000,
  afterLoad: function(anchorLink, index) {
    if (index == 2) {
      $('#fp-nav').hide();
      $.fn.fullpage.moveTo(2, 0);
      }
    else {
      $('#fp-nav').show();
    }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index != 2) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'secondSection' && slideIndex == 1) {
      
    }
  },
});
