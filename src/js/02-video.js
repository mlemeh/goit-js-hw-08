import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe")

const player = new Player(iframe);

player.ready().then(function() {
  let currentTime = 0;
  if (localStorage.getItem("videoplayer-current-time"))
    currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

  player.setCurrentTime(currentTime)
});

function fnTimeupdate() {
  player.getCurrentTime().then(
    function (seconds) {
      localStorage.setItem("videoplayer-current-time",JSON.stringify(seconds));
    })
}

const throttled = throttle(fnTimeupdate, 1000)

player.on('timeupdate', throttled);

