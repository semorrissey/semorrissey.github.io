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

//function to toggle animation classes from animate.css
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {
      once: true
    });
  });

function toggleVisibility(item) {

  const idArray = ['Education', 'Projects', 'Resume', 'About', 'Contact'];
  for (var i = 0; i < idArray.length; i++) {
    if (document.getElementById(idArray[i]).style.visibility === "visible") {
      document.getElementById(idArray[i]).style.setProperty('--animate-duration', '0.5s');
      animateCSS('#' + idArray[i], 'fadeOut').then((message) => {
        document.getElementById(idArray[i]).style.visibility = "hidden";
      });
      break;
    }
  }
  if (item.innerHTML === "Home") {
    return
  }
  //toggles visibility and adds temporary animations for each transistion
  if (document.getElementById(item.innerHTML).style.visibility === "visible") {
    document.getElementById(item.innerHTML).style.setProperty('--animate-duration', '0.5s');
    animateCSS('#' + item.innerHTML, 'fadeOut').then((message) => {
      document.getElementById(item.innerHTML).style.visibility = "hidden";
    });

  } else {
    document.getElementById(item.innerHTML).style.visibility = "visible";
    document.getElementById(item.innerHTML).style.setProperty('--animate-duration', '0.5s');
    animateCSS('#' + item.innerHTML, 'fadeIn');
  }
}