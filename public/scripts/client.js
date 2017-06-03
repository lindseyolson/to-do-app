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
    success: function (response) {
      console.log('back from post call with:', response);
    } // end success
  }); // end AJAX
  // set value of input to an empty string
  $('#inputToDo').val('');
}; // end addItem function

var completeTask = function(){
  // add class of completed
  // this.parent completed
  // create object to send to server
  // completed = true
  // ajax post request
  // move to the bottom of the list
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
      console.log('back from get call with:', response);
    } // end success
  }); // end AJAX
  // run updateList function upon success to display on dom

}; // end getItems function

var updateList = function(taskArr){
  // empty <ul>
  // for loop to run through array
  // append each <li> item to <ul id="listItem">
  // append completed button
  // append deleted button
}; // end updateList function
