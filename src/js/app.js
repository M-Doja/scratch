// -------------------------------------------------------------------------------------------------------------------------------
// This is practice code for example, modification, and reference. I am using the a combination of vanilla and JQuery in this build.
// This project does not use any yeoman generators so I will see just how far I can take this from my own knowledge base currently.
// Feel free to review this code and give feedback as it is modified.
//
// Version 1.0.0
// Name: Scratch
// Creator: Micah Dunson
// Github: https://Github.com/M-Doja
// ----------------------------------------------------------

// GLOBAL variable array
var People = [];

// Constructor function for new person object that take 'name' parameter
function person(name) {
  this.name = name;
}

// To add a name to the list
function addName() {
  // Saves input value to variable 'userName'
  var userName = $('#userName').val();
  // If input field is not empty str
  if(userName !== '') {
  // Create new instanace of obj person
  var newPerson = new person(userName);
  // Push new person obj into People array
  People.push(newPerson);
  // ---------testing-------------
  console.log(newPerson.name);
  console.log(People);
  // ------------------------
  // Clear input value
  $('#userName').val("");
  // Display People array
  showPeople();
  // Else if input is empty str alert the following
  } else {
    // Message to alert
    alert('Please enter a name.')
  }
}

// To show the output list from the input field
function showPeople() {
  // Clear the are where text will be displayed
  $("#result").text('');
  // Create variable to store text output
  var holder = '';
  // Getting all the data from the People array
  for (var i = 0; i < People.length; i++){
    // Output will hold an unordered list
    holder += "<ul>";
    // Output will hold list items of name properties
    holder += "<li><h3>" + People[i].name + "</h3></li>";
    // Output will hold unordered list closure
    holder += "</ul>";
    // Output will hold a div containing buttons to be used to alter data
    holder += "<div id='save" + i +"'><button class='btn btn-sm btn-primary' onclick='deletePerson(" + i + ")'>Delete " + People[i].name +" </button><button class='btn btn-sm btn-primary' onclick='editPerson(" + i + ")'>Edit " + People[i].name +"</button></div>";
  }
  // In the element with ID 'result' render in html all the data held inside the variable 'holder'
  $('#result').html(holder);
}

// Delete person by their index position
function deletePerson(index) {
  // Splice from array that index, remove that one
  People.splice(index, 1);
  // Display People array
  showPeople();
}

// Edit person by their index position
function editPerson(index) {
  // Save seleted person name as variable 'editname'
  var editName = People[index].name;
    // Set input value to variable 'editName'
  document.getElementById('userName').value = editName;
  // Sets input value position to that of selected
  $('#editUserName').val(index);
  // Save function saved to variable
  var save = '<button class="btn btn-danger btn-sm" onclick="savePerson()">Save</button>';
  // Setting save btn on selected person
  $('#save' + index).html(save);
}

// Save newly editted person
function savePerson(index) {
  // Sets variable to userName value
  var editName = $("#userName").val();
  // Sets selected person position to that of editUserName variable
  var index = $("#editUserName").val();
  // Sets selected person in arry name to editName variable
  People[index].name = editName;
  // Clears out input field
  $('#userName').val("");
  // Display People array
  showPeople();
}
