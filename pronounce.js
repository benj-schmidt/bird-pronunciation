function playNext() {
    if(audioPointer < audioArray.length) {
        audio = new Audio(audioArray[audioPointer] + '.mp3');
        audio.addEventListener("ended", playNext);
        audio.play();
        console.log(`playing ${audioArray[audioPointer]}`);
        audioPointer += 1;
    } else {
        console.log("finished");
    }
}

function tweakAudioArray () {
    // if (this == ["blue", "jay"]) {this = ['blue-jay']}
    if (audioArray.length == 2 && audioArray[0] == 'blue' && audioArray[1] == 'jay') {audioArray = ['blue-jay']};
    if (audioArray[audioArray.length-1] == 'owl') {audioArray.unshift('pre-owl')};
    if (audioArray.includes ('chihuahuan')) {audioArray.push('post-chihuahuan')};
    if (audioArray.includes('cackling')) {audioArray.push('post-cackling')};
}

function onStart() {
    if (audio) {
        audio.pause();
    }
    var name = document.getElementById("bird-name").value;
    audioArray = name.split(" ");
    tweakAudioArray();
    console.log(audioArray);
    document.getElementById('output').innerHTML = document.getElementById('bird-name').value;
    console.log("start");
    audioPointer = 0;
    playNext();
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", onStart);
var audioArray = [];
let audioPointer;
let audio;
