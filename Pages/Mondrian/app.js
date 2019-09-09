// function playSound(event) {
//     const audio = document.querySelector(`audio[id="${event.}"]`);
//     const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
//   }

  // Create audio element
  var audioElement = document.createElement("audio");


  // Red hover
  $(".red").mouseenter(function() {
    audioElement.setAttribute("src", "./sounds/snare.wav");
    audioElement.play();
  });


// Red hover
$(".theme-button").on("click", function() {
    audioElement.play();
    });
    $(".pause-button").on("click", function() {
    audioElement.pause();
    });

  // Blue hover
  $(".theme-button").on("click", function() {
    audioElement.play();
  });
  $(".pause-button").on("click", function() {
    audioElement.pause();
  });

    // Grey hover
    $(".theme-button").on("click", function() {
        audioElement.play();
      });
      $(".pause-button").on("click", function() {
        audioElement.pause();
      });

      // White hover
  $(".theme-button").on("click", function() {
    audioElement.play();
  });
  $(".pause-button").on("click", function() {
    audioElement.pause();
  });