$(document).ready(function(){
    end_time = new Date().getTime();
    press_counter = 0;
    $("#phone").find("button").mousedown(function(event){
      mousedown = new Date().getTime();
    })
    $("#phone").find("button").mouseup(function(event){
        mouseup = new Date().getTime();
        var button_pressed = $(event.currentTarget).data("value")
        $("#result").val(t9($("#result").val(),button_pressed))
    })
})


function t9(text,button_pressed){
  var press_duration = mouseup - mousedown;
  var key1 = ['.',',','!'];
  var key2 = ['a','b','c'];
  var key3 = ['d','e','f'];
  var key4 = ['g','h','i'];
  var key5 = ['j','k','l'];
  var key6 = ['m','n','o'];
  var key7 = ['p','q','r','s'];
  var key8 = ['t','u','v'];
  var key9 = ['w','x','y','z'];
  var key0 = ' ';
  var key_star = '*';
  var key_hash = '#';
  var start_time;

  var chk_interval = function (end) {
    var time_new = {};
    var start = new Date().getTime();
    if (end) {
      time_new.diff_time = start - end;
      time_new.end = start;
      return time_new;
    } else {
      time_new.end = start;
      return time_new;
    }
  }

  if (press_duration >= 500){
    if (button_pressed == '1'){
      text = 1;
    } else if (button_pressed == '2'){
      text = 2;
    } else if (button_pressed == '3') {
      text = 3;
    } else if (button_pressed == '4') {
      text = 4;
    } else if (button_pressed == '5') {
      text = 5;
    } else if (button_pressed == '6') {
      text = 6;
    } else if (button_pressed == '7') {
      text = 7;
    } else if (button_pressed == '8') {
      text = 8;
    } else if (button_pressed == '9') {
      text = 9;
    } else if (button_pressed == '0') {
      text = 0;
    } else if (button_pressed == '*') {
      text = '*';
    } else {
      text = '#'
    }
  }

  var interval = chk_interval(end_time);
  var difference = interval.diff_time;
  end_time = interval.end;

  if (difference <= 1000) {
    if (button_pressed == '1'){
      press_counter += 1;
      var key_press = (press_counter % 3);
      if (key_press != 0) {
        key_press -= 1;
      } else key_press = 2;
      text = key1[key_press];
    } else if (button_pressed == '2'){
      press_counter += 1;
      var key_press = (press_counter % 3);
      if (key_press != 0) {
        key_press -= 1;
      } else key_press = 2;
      text = key2[key_press];
    } else if (button_pressed == '3') {
      press_counter += 1;
      var key_press = (press_counter % 3);
      if (key_press != 0) {
        key_press -= 1;
      } else key_press = 2;
      text = key3[key_press];
    } else if (button_pressed == '4') {
      press_counter += 1;
      var key_press = (press_counter % 3);
      if (key_press != 0) {
        key_press -= 1;
      } else key_press = 2;
      text = key4[key_press];
    } else if (button_pressed == '5') {
      press_counter += 1;
      var key_press = (press_counter % 3);
      if (key_press != 0) {
        key_press -= 1;
      } else key_press = 2;
      text = key5[key_press];
    } else if (button_pressed == '6') {
      press_counter += 1;
      var key_press = (press_counter % 3);
      if (key_press != 0) {
        key_press -= 1;
      } else key_press = 2;
      text = key6[key_press];
    } else if (button_pressed == '7') {
      press_counter += 1;
      var key_press = (press_counter % 4);
      if (key_press != 0) {
        key_press -= 1;
      } else key_press = 3;
      text = key7[key_press];
    } else if (button_pressed == '8') {
      press_counter += 1;
      var key_press = (press_counter % 3);
      if (key_press != 0) {
        key_press -= 1;
      } else key_press = 2;
      text = key8[key_press];
    } else if (button_pressed == '9') {
      press_counter += 1;
      var key_press = (press_counter % 4);
      if (key_press != 0) {
        key_press -= 1;
      } else key_press = 3;
      text = key9[key_press];
    } else if (button_pressed == '0') {
      text = key0;
    } else if (button_pressed == '*') {
      text = key_star;
    } else {
      text = key_hash;
    }

  } else {
    press_counter = 0;

  }


    return text;
}
