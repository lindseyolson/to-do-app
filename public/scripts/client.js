$(document).ready(function(){
  console.log('JQJS');
  $('#submit').on('click', addTask);
  $('#toDoList').on('click', '.completeButton', completeTask);
  $('#toDoList').on('click', '.deleteButton', deleteTask);
  getTasks();
}); // end doc ready

var addTask = function(){
  // take in input
  // create object of input to send to db
  var objectToSend = {
    task: $('#inputToDo').val(),
    completed: false
  };
  console.log('sending:', objectToSend);
  // ajax post request sending object
  $.ajax({
    type: 'POST',
    url: '/add',
    data: objectToSend,
    success: getTasks
  }); // end AJAX
  // set value of input to an empty string
  $('#inputToDo').val('');
}; // end addItem function

var completeTask = function(){
  // create object to send to server
  var objectToSend = {
    task: $(this).parent().text(),
    completed: true
  };
    // ajax post request
  $.ajax({
    type: 'POST',
    url: '/completed',
    data: objectToSend,
    success: getTasks
  }); // end AJAX
}; // end completeItem function

var deleteTask = function(){
  // create object to send to server
  var objectToSend = {
    task: $(this).parent().text()
  };
    // ajax post request
  $.ajax({
    type: 'POST',
    url: '/delete',
    data: objectToSend,
    success: $(this).parent().remove()
  }); // end AJAX
}; // end deleteItem function

var getTasks = function(){
  // ajax get request to get all items
  $.ajax({
    type: 'GET',
    url: '/tasks',
    success: function(response){
      updateList(response);
    } // end success
  }); // end AJAX
}; // end getItems function

var updateList = function(taskArr){
  $('#toDoList').empty();
  for (var i = 0; i < taskArr.length; i++) {
    var $listItem = $('<li>');
    // append task
    $listItem.append(taskArr[i].task);
    // append deleted button
    $listItem.append('<input type="submit" value="delete" class="deleteButton">');
    if (taskArr[i].completed === false){
      // append completed button
      $listItem.append('<input type="submit" value="completed" class="completeButton">');
      $('#toDoList').prepend($listItem);
    } // end if statement
    else {
      $listItem.addClass('completed');
      $('#toDoList').append($listItem);
    } // end else statement
  } // end for loop
}; // end updateList function
