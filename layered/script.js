

function play_snow_audio() {
  var snowaudio = document.getElementById("snow-audio");
  snowaudio.play();
}
function stop_snow_audio() {
  var snowaudio = document.getElementById("snow-audio");
  snowaudio.pause();
  snowaudio.currentTime = 0;
}


function play_spring_audio() {
  var springaudio = document.getElementById("spring-audio");
  springaudio.play();
}
function stop_spring_audio() {
  var springaudio = document.getElementById("spring-audio");
  springaudio.pause();
  springaudio.currentTime = 0;
}


function play_beach_audio() {
  var beachaudio = document.getElementById("beach-audio");
  beachaudio.play();
}
function stop_beach_audio() {
  var beachaudio = document.getElementById("beach-audio");
  beachaudio.pause();
  beachaudio.currentTime = 0;
}


function play_autumn_audio() {
  var autumnaudio = document.getElementById("autumn-audio");
  autumnaudio.play();
}
function stop_autumn_audio() {
  var autumnaudio = document.getElementById("autumn-audio");
  autumnaudio.pause();
  autumnaudio.currentTime = 0;
}

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
      duration: 2200,	// the scene should last for a scroll distance of 100px
      offset: 0	// start this scene after scrolling for 50px
    })
      .setPin(".january") // pins the element for the the scene's duration
      .addTo(controller); // assign the scene to the controller

new ScrollMagic.Scene({
      duration: 1000,	// the scene should last for a scroll distance of 100px
      offset: 0	// start this scene after scrolling for 50px
    })
      // .setPin(".february") // pins the element for the the scene's duration
      .addTo(controller); // assign the scene to the controller

new ScrollMagic.Scene({
      duration: 1000,	// the scene should last for a scroll distance of 100px
      offset: 0	// start this scene after scrolling for 50px
    })
      // .setPin(".march") // pins the element for the the scene's duration
      .addTo(controller); // assign the scene to the controller

	// (function () { // wait for document ready
	// 	// init
	// 	var controller = new ScrollMagic.Controller({
	// 		globalSceneOptions: {
	// 			triggerHook: 'onLeave'
	// 		}
	// 	});
	// 	// get all slides
	// 	var slides = document.querySelectorAll("section.panel");
	// 	// create scene for every slide
	// 	for (var i=0; i<slides.length; i++) {
	// 		new ScrollMagic.Scene({
	// 				triggerElement: slides[i]
	// 			})
	// 			.setPin(slides[i])
	// 			.addIndicators() // add indicators (requires plugin)
	// 			.addTo(controller);
	// 	}
  // });
  
// var audio = document.getElementById("snowww.mp3");
// audio.play();

// var audio = $("#snowww.mp3")[0];
// audio.play();

// var audio = $("#snowww.mp3")[0];
// $("invisible-div-spring").mouseenter(function() {
//   audio.play();
// });