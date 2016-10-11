var startTime = new Date().getTime();
var pressCounter = 0;
var lastPressed = '';
var result = '';
var alphabets = {
  1:['.',',','!'],
  2:['a','b','c'],
  3:['d','e','f'],
  4:['g','h','i'],
  5:['j','k','l'],
  6:['m','n','o'],
  7:['p','q','r','s'],
  8:['t','u','v'],
  9:['w','x','y','z'],
  0:[' '],
  '*':['*'],
  '#':['#']
}

var mouseDwn = function(btn){
  mouseDwnTime = new Date().getTime();
}

var mouseUp = function(btn){
  mouseUpTime = new Date().getTime();
}


var btnPress = function(btn) {
  var recent = '';
  var longPress = false;
  var pressDuration = mouseUpTime - mouseDwnTime;
  pressDuration > 500 ? longPress = true : longPress = false;

  var currentTime = new Date().getTime();
  var pause = false;
  var timeGap = currentTime - startTime;
  timeGap > 1000 ? pause = true : pause = false;
  startTime = currentTime;

  if (lastPressed != btn) pressCounter = 0;

  for (key in alphabets) {
    if (btn == key) {
      if (longPress) recent=key;
      else if (pause){
        recent = alphabets[key][0];
        pressCounter = 1;
      } else {
        if (btn == 7 || btn == 9){
          pressCounter += 1;
          var index = (pressCounter % 4);
          index != 0 ? index -= 1 : index = 3;
          recent = alphabets[key][index];
        } else {
          pressCounter += 1;
          var index = (pressCounter % 3);
          index != 0 ? index -= 1 : index = 2;
          recent = alphabets[key][index];
        }
      }
    }
  }

  lastPressed = btn;
  result = recent;
  $("#result").val(result);
}
