import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_PLAY_TIME = 'videoplayer-current-time';

player.setLoop(true);
fromCurrentTime()

const onPlay = function (event) {
    const saveTime = event.seconds;
    localStorage.setItem(CURRENT_PLAY_TIME, saveTime);
};

player.on('timeupdate', throttle(onPlay, 1000));
// console.log(localStorage.getItem(CURRENT_PLAY_TIME));

function fromCurrentTime() {
    if (localStorage.getItem(CURRENT_PLAY_TIME)) {
        player.setCurrentTime(localStorage.getItem(CURRENT_PLAY_TIME));
    }
     
}
