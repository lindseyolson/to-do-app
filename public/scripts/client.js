$(document).ready(function(){
  console.log('JQJS');
  $('#submit').on('click', addTask);
  $('#toDoList').on('click', '#completeItem', completeTask);
  $('#toDoList').on('click', '#deleteItem', deleteTask);
  getTasks();
}); // end doc ready

var addTask = function(){
  // take in input
  // create object of input to send to db
  var objectToSend = {
    task: $('#inputToDo').val()
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
  // var $thisParent = $(this).parent();
  // // add class of completed
  // $thisParent.addClass('completed');
  // // create object to send to server
  // var objectToSend = {
  //   task:
  //   completed: true
  // };
  //   // ajax post request
  // $.ajax({
  //   type: 'POST',
  //   url: '/completed',
  //   data: objectToSend,
  //   success: function(response){
  //     console.log('post hit response:', response);
  //     // move to the bottom of the list
  //   } // end success
  // }); // end AJAX
}; // end completeItem function

var deleteTask = function(){
  // append alert asking are you sure?
  // this.parent remove
  // create object to send to server
  // delete item in db
  // ajax post request
  // remove from dom
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
    $listItem.append(taskArr[i].task);
    // append completed button
    // $listItem.append('<button id="completeItem">complete</button>');
    // append deleted button
    // $listItem.append('<button id="deleteItem">delete</button>');
    $('#toDoList').append($listItem);
  } // end for loop
}; // end updateList function
