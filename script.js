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

};

function updateHourBasedOnTime() {

  var time = [
    time("#hour-9") = 9,
    time("#hour-10") = 10,
    time("#hour-11") = 11,
    time("#hour-12") = 12,
    time("#hour-1") = 13,
    time("#hour-2") = 14,
    time("#hour-3") = 15,
    time("#hour-4") = 16,
    time("#hour-5") = 17]

  var current_time = dayjs().format('hh');
  current_time = hour.toString();
  console.log(current_time);

  for (i = 0; i < time.length; i++) {

    if (time[i] < current_time) {
      element.removeClass("present future").addClass("past");
    } else if (time[i] > current_time) {
      element.removeClass("past present").addClass("future");
    } else {
      element.removeClass("past future").addClass("present");
    }

  };
 

};

var date = dayjs().format('dddd, MMMM DD');
var date2 = dayjs().format('hh:mm:ss A');
$('#currentDay').text(date2 + " " + date);

var button = $('button');
button.on("click", collectData);

$(document).ready(function () {
  updateHourBasedOnTime();
});

document.location.reload;

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