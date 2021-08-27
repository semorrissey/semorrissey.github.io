// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

/*this doesnt wokr because for some reason the boolean is only true or false not changing*/
function toggleVisibility(item) {
  if ($('#' + item.innerHTML).is(":visible")) {
    console.log("I hidden");
    $('#' + item.innerHTML).css({
      'visibility': 'hidden'
    });
  } else {
    console.log($('#' + item.innerHTML).is(":visible"));
    $('#' + item.innerHTML).css({
      'visibility': 'visible'
    });
  }


  /*  if (document.getElementById(item.innerHTML).style.visibility === "visible") {
      document.getElementById(item.innerHTML).style.visibility = "hidden";
    } else {
      document.getElementById(item.innerHTML).style.visibility = "visible";
    }*/
}