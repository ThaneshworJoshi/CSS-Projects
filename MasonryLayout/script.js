// Video play paus
function playVideo(container) {
    var video = container.querySelector('.video');
    video.play();
}

function pauseVideo(container) {
    var video = container.querySelector('.video');
    video.pause();
}



document.getElementById("cross-icon").addEventListener("click", function() {
    var element = document.getElementById("item-wrapper");
    if (element.classList.contains("default-state")) {
        element.classList.remove("default-state");
        element.classList.add("active");
    } else {
        element.classList.remove("active");
        element.classList.add("default-state");
    }
  });