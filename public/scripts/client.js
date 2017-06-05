$(document).ready(function(){
  console.log('JQJS');
  $('#submit').on('click', addTask);
  $('#toDoList').on('click', '.checkbox', completeTask);
  $('#toDoList').on('click', 'span', deleteTask);
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
  console.log('sending:', objectToSend);
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
  // confirm('Are you sure you want to delete?');
  if (confirm('Are you sure you want to delete?') === true) {
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
  } // end if statement
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
    // $listItem.append('<input type="submit" value="delete" class="deleteButton">');
    $listItem.append('<span type="submit" class="fa fa-trash"></span>');
    if (taskArr[i].completed === false){
      $listItem.prepend('<input type="checkbox" class="checkbox" />');
      $('#toDoList').prepend($listItem);
      // $listItem.append('<input type="submit" value="completed" class="completeButton">');
    } // end if statement
    else {
      $listItem.addClass('completed');
      $listItem.prepend('<input type="checkbox" class="checked" checked="true"/>');
      $('#toDoList').append($listItem);
    } // end else statement
  } // end for loop
}; // end updateList function
