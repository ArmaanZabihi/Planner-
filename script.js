// TODO - when page loads,
// LOAD saved todos from localStorage, update page

// update timeblocks with the correct class
// first select all the timeblocks
var timeBlocks = $(".description");

var updateTimeBlockClasses = function () {
  var currentHourOffset = new Date().getHours() - 9;
  console.log(currentHourOffset);
  $.each(timeBlocks, function (i, block) {
    if (currentHourOffset > i) {
      $(block).addClass("past");
    } else if (currentHourOffset === i) {
      $(block).addClass("present");
    } else {
      $(block).addClass("future");
    }
  });
};
//click saveBtn
$(".saveBtn").each(function (i, btn) {
  console.log(btn);
  var hour =$(btn).parent().attr ('id')
  var storage=localStorage .getItem(hour)
  $(btn).siblings('.description').val(storage)
  $(btn).on("click", function (event) {
    var text = $(event.target).siblings(".description").val().trim();
    var time= $(event.target).parent().attr ('id')
    console.log(text);
    localStorage.setItem(time, text);
  });
});

updateTimeBlockClasses();
//new Date (1504725855) will this commnand show the current date at the top of the page?
