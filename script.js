// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var collectData = function (event) {
  event.preventDefault();

  var taskArray = [];

  $("textarea").each(function () {
    taskArray.push($(this).val());
  });

  console.log(taskArray);

 var stringify = JSON.stringify(taskArray);

 localStorage.setItem("taskArray", stringify);

 var stringify = localStorage.getItem("taskArray");

 var newTaskArray = JSON.parse(stringify);

 console.log(newTaskArray);

//  function updateClassBasedOnTime() {

//  var targetTime = new Date();
//  var elementTime = new Date();

//  elementTime.setHours(elementTime.getHours() + 1);

 
//  var element = $("#timeStatus");

//  if (elementTime < targetTime) {
//      // Time is in the past
//      element.removeClass("present future").addClass("past");
//  } else if (elementTime > targetTime) {
//      // Time is in the future
//      element.removeClass("past present").addClass("future");
//  } else {
//      // Time is the same (present)
//      element.removeClass("past future").addClass("present");
//  }
// }
  // Save the data to local storage
  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
};

function updateHourBasedOnTime() {

  var time = Array();
  time["#hour-9"] = [0900];
  time["#hour-10"] = [1000];
  time["#hour-11"] = [1100];
  time["#hour-12"] = [1200];
  time["#hour-1"] = [1300];
  time["hour-2"] = [1400];
  time["#hour-3"] = [1500];
  time["#hour-4"] = [1600];
  time["#hour-5"] = [1700];

  var today_hours = hour[i];
  var current_time = hour.toString() + minute.toString();

  if(today_hours <= current_time && today_hours[1] > current_time) {
      return true;
  }
 
  if (today_hours[0] < current_time) {
      element.removeClass("present future").addClass("past");
  } else if (today_hours[0] > current_time) {
      element.removeClass("past present").addClass("future");
  } else {
      element.removeClass("past future").addClass("present");
  }

};

var date = dayjs().format('dddd, MMMM DD');
var date2 = dayjs().format('hh:mm:ss A');
$('#currentDay').text(date2 + " " + date);

var button = $('button');
button.on("click", collectData);

$(document).ready(function () {
  updateHourBasedOnTime();
});