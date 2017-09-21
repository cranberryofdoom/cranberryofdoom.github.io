var corgiKeys = [{
  key: 'left',
  keyCode: 37,
}, {
  key: 'up',
  keyCode: 38,
}, {
  key: 'right',
  keyCode: 39,
}, {
  key: 'down',
  keyCode: 40,
},];
var turtleKeys = [{
  key: 1,
  keyCode: 49,
}, {
  key: 2,
  keyCode: 50,
}, {
  key: 3,
  keyCode: 51,
}, {
  key: 4,
  keyCode: 52,
}, {
  key: 5,
  keyCode: 53,
}, {
  key: 6,
  keyCode: 54,
}];
var octopusKeys = [{
  key: 'w',
  keyCode: 87,
  animal: 'octo',
}, {
  key: 'a',
  keyCode: 65,
  animal: 'octo',
}, {
  key: 's',
  keyCode: 83,
  animal: 'octo',
}, {
  key: 'd',
  keyCode: 68,
  animal: 'octo',
}, {
  key: 'f',
  keyCode: 70,
  animal: 'octo',
}, {
  key: 'g',
  keyCode: 71,
  animal: 'octo',
}, {
  key: 'h',
  keyCode: 72,
  animal: 'octo',
}, {
  key: 'j',
  keyCode: 74,
  animal: 'octo',
}];
var giraffeKeys = [{
  key: 'z',
  keyCode: 90,
}, {
  key: 'x',
  keyCode: 88,
}, {
  key: 'c',
  keyCode: 67,
}, {
  key: 'v',
  keyCode: 86,
}];
var allKeys = [].concat(corgiKeys, turtleKeys, octopusKeys, giraffeKeys);
var keysDown = {};

function playAudio(key) {
  var audio = document.getElementById('audio' + key);
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
}

function resetAudio(key) {
  var audio = document.getElementById('audio' + key);
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

function eventKeyDown(event) {
  var keyCode = event.keyCode;
  allKeys.map(function(keyObject) {
    if (keyCode === keyObject.keyCode) {
      if (!keysDown[keyCode]) {
        keysDown[keyCode] = true;
        playAudio(keyObject.key);
        document.getElementById('button' + keyObject.key).classList.add('active');
      }
    }
  });
}

function eventKeyUp(event) {
  var keyCode = event.keyCode;
  allKeys.map(function(keyObject) {
    if (keyCode === keyObject.keyCode) {
      if (keysDown[keyCode]) {
        keysDown[keyCode] = false;
      }
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
