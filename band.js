var corgiKeys = [{
  key: 'left',
  keyCode: 37,
  type: 'corgi',
}, {
  key: 'up',
  keyCode: 38,
  type: 'corgi',
}, {
  key: 'right',
  keyCode: 39,
  type: 'corgi',
}, {
  key: 'down',
  keyCode: 40,
  type: 'corgi',
},];
var turtleKeys = [{
  key: 1,
  keyCode: 49,
  type: 'turtle',
}, {
  key: 2,
  keyCode: 50,
  type: 'turtle',
}, {
  key: 3,
  keyCode: 51,
  type: 'turtle',
}, {
  key: 4,
  keyCode: 52,
  type: 'turtle',
}, {
  key: 5,
  keyCode: 53,
  type: 'turtle',
}, {
  key: 6,
  keyCode: 54,
  type: 'turtle',
}];
var octopusKeys = [{
  key: 'w',
  keyCode: 87,
  type: 'octopus',
}, {
  key: 'a',
  keyCode: 65,
  type: 'octopus',
}, {
  key: 's',
  keyCode: 83,
  type: 'octopus',
}, {
  key: 'd',
  keyCode: 68,
  type: 'octopus',
}, {
  key: 'f',
  keyCode: 70,
  type: 'octopus',
}, {
  key: 'g',
  keyCode: 71,
  type: 'octopus',
}, {
  key: 'h',
  keyCode: 72,
  type: 'octopus',
}, {
  key: 'j',
  keyCode: 74,
  type: 'octopus',
}];
var allKeys = [].concat(corgiKeys, turtleKeys, octopusKeys);

function playAudio(key) {
  var audio = document.getElementById('audio' + key);
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
}

function eventKeyDown(event) {
  var keyCode = event.keyCode;
  allKeys.map(function(keyObject) {
    if (keyCode === keyObject.keyCode) {
      playAudio(keyObject.key);
      document.getElementById('button' + keyObject.key).classList.add('active');
    }
  });
}

function eventKeyUp(event) {
  var keyCode = event.keyCode;
  allKeys.map(function(keyObject) {
    if (keyCode === keyObject.keyCode) {
      document.getElementById('button' + keyObject.key).classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  allKeys.map(function(keyObject) {
    var element = document.getElementById('button' + keyObject.key);
    if (element) {
      element.addEventListener('click', function() { playAudio(keyObject.key); }, false);
    }
  });
  document.addEventListener('keydown', eventKeyDown, false);
  document.addEventListener('keyup', eventKeyUp, false);
});
