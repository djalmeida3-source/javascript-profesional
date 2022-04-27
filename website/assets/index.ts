import MediaPlayer from '@djalmeida3/platzimediaplayer';
import AutoPlay from '@djalmeida3/platzimediaplayer/lib/plugins/AutoPlay'
import AutoPause from '@djalmeida3/platzimediaplayer/lib/plugins/AutoPause'
import Ads from '@djalmeida3/platzimediaplayer/lib/plugins/Ads'

const video = document.querySelector("video")
const play_button: HTMLElement = document.getElementById("playButton")
const mute_button: HTMLElement = document.getElementById("muteButton")

const player = new MediaPlayer({
    el: video, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});
play_button.onclick = () => player.togglePlay();
mute_button.onclick = () => player.mute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}
