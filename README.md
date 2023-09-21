# glowing-spork

# Steps

## First: I set up 2 variables for the current date. one being set to the day of the week, month, and day as a number and the second as the hour, minutes, and second with the pm/am and the added that to id current day with a space inbetween them so that it would read the time and the date. This is displayed based on the id of currentDay which places it at the top of the page under a simple calendar app for scheduling your work day.

## Second: started with the jquery version of an eventlistener with .on and had the save button set 2 variables one to grab the id of the outer div and the other to get the value of the text area and then set them into local storage at the same time.

## Third: in an each function i targeted the class time block and set 2 variables in the function. One to get the id as the current hour and the other to set the stored data pulled from the local storage to it. then i used .find with the class description to set that as the text for the textarea. This way my page reloads but keeps what has been entered into each text field unless manually cleared.

## Forth: I set up a function to help update the classes of each hour row so that they are color coated depending on whether it is past, present, or future. Within this function i have my ids being captured in an array and setting the hr to the number that corresponds with the hour based on a 24 hour clock.

## Fifth: I set a variable to hold the current time based on the hour.

## Sixth: I set a for loop to got over the entire array and cross check it with the current time. If the array hour is less than the current hour then the present and future class is taken off, which ever it contains, and the past class is added which changes the color of the box to gray. The else if statement checks to see if the array hour is greater than the current hour and if it is then it removes past and present, which ever it has, and adds future. This changes the box to green. The last else statement checks to see if the array hour is equal to the current hour and if it is then it removes the past and future class, which ever it has, and adds present. This changes the color to red.

## Seventh: I called the name of the function that changes the color of each text box based on time so that it will automatically call when the page is loading and have the boxes adjusted from the start.

# Special Thanks

## Thank you to rich for helping me understand to try and retrieve my data in an array and target it with a for loop. Thanks to Andrew Allen and Samuel Johnson for helping me work through a few bugs i was dealing with.