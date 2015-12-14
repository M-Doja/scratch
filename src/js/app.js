var People = [];
function person(name) {
  this.name = name;
}
function addName() {
  var userName = $('#userName').val();
  if(userName !== '') {
  var newPerson = new person(userName);
  People.push(newPerson);
  console.log(newPerson.name);
  console.log(People);
  $('#userName').val("");
  showPeople();
  } else {
    alert('Please enter a name.')
  }
}
function showPeople() {
  $("#result").text('');
var holder = '';
for (var i = 0; i < People.length; i++){
  holder += "<ul>";
  holder += "<li><h3>" + People[i].name + "</h3></li>";
  holder += "</ul>";
  holder += "<div id='save" + i +"'><button class='btn btn-sm btn-primary' onclick='deletePerson(" + i + ")'>Delete " + People[i].name +" </button><button class='btn btn-sm btn-primary' onclick='editPerson(" + i + ")'>Edit " + People[i].name +"</button></div>";
  }
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
  // Save seleted person name as 'editname'
  var editName = People[index].name;

  document.getElementById('userName').value = editName;
  $('#editUserName').val(index);
  var save = '<button onclick="savePerson()"><Save</button>';
  $('#save' + index).html(save);
}
function savePerson(index) {
  var editName = $("#userName").val();
  var index = $("#editUserName").val();
  People[index].name = editName;
  $('#userName').val("");
  showPeople();

}
