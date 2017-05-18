var corgiKeys = [7, 8, 9, 0];
var turtleKeys = [1, 2, 3, 4, 5, 6];
var octopusKeys = ['w', 'a', 's', 'd', 'f', 'g', 'left', 'right'];
var allKeys = [].concat(corgiKeys, turtleKeys, octopusKeys);

function playAudio(key) {
  var audio = document.getElementById('audio' + key);
  if (audio) audio.play();
}

document.addEventListener('DOMContentLoaded', function() {
  allKeys.map(function(key) {
    var element = document.getElementById('button' + key);
    if (element) {
      element.addEventListener('click', function() { playAudio(key); }, false);
    }
  });
});
