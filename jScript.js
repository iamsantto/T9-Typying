var startTime = new Date().getTime();
var pressCounter = 0;
var lastPressed = '';
var result = '';
var variableChar = '';
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

var btnPress = function (btn) {
  $("#result").val(t9(btn));
}

var t9 = function(btn) {
  var recent = '';
  
  var longPress = false;
  var pressDuration = mouseUpTime - mouseDwnTime;
  pressDuration > 500 ? longPress = true : longPress = false;

  var currentTime = new Date().getTime();
  var pause = false;
  var timeGap = currentTime - startTime;
  timeGap > 1000 ? pause = true : pause = false;
  startTime = currentTime;


  if (lastPressed != btn) {
    pressCounter = 0;
    result = result + variableChar;
    variableChar = '';
  }

  for (key in alphabets) {
    if (btn == key) {
      if (longPress) recent=key;
      else if (pause){
        result = result + variableChar;
        variableChar = '';
        variableChar = alphabets[key][0];
        pressCounter = 1;
        lastPressed = btn;
        return (result + variableChar);
      } else {
        if (btn == 7 || btn == 9){
          pressCounter += 1;
          var index = (pressCounter % 4);
          index != 0 ? index -= 1 : index = 3;
          variableChar = alphabets[key][index];
          lastPressed = btn;
          return (result + variableChar);
        } else if (btn == 0 || btn == '#' || btn == '*') {
          recent = alphabets[key][0];
        } else {
          pressCounter += 1;
          var index = (pressCounter % 3);
          index != 0 ? index -= 1 : index = 2;
          variableChar = alphabets[key][index];
          lastPressed = btn;
          return (result + variableChar);
        }
      }
    }
  }

  lastPressed = btn;
  result = result + recent;
  return result;
}
