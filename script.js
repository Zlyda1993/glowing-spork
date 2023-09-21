// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(".saveBtn").on("click", function () {
  var currentHour = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();
  localStorage.setItem(currentHour, text);
});

$(".time-block").each(function () {
  var currentHour = $(this).attr("id");
  var storedText = localStorage.getItem(currentHour);
  $(this).find(".description").val(storedText);
});

function updateHourBasedOnTime() {
  var time = [
    { element: $("#hour-9"), hour: 9 },
    { element: $("#hour-10"), hour: 10 },
    { element: $('#hour-11'), hour: 11 },
    { element: $("#hour-12"), hour: 12 },
    { element: $("#hour-1"), hour: 13 },
    { element: $("#hour-2"), hour: 14 },
    { element: $("#hour-3"), hour: 15 },
    { element: $("#hour-4"), hour: 16 },
    { element: $("#hour-5"), hour: 17 }
  ];

  var currentTime = dayjs().hour();
  console.log(currentTime)

  for (var i = 0; i < time.length; i++) {
    var element = time[i].element;
    var hour = time[i].hour;

    if (hour < currentTime) {
      element.removeClass("present future").addClass("past");
    } else if (hour > currentTime) {
      element.removeClass("past present").addClass("future");
    } else {
      element.removeClass("past future").addClass("present");
    }
  };
};

updateHourBasedOnTime();

var date = dayjs().format('dddd, MMMM DD');
var date2 = dayjs().format('hh:mm:ss A');
$('#currentDay').text(date2 + " " + date);


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
