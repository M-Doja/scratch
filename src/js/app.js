var People = [];
function person(name) {
  this.name = name;
}
function addName() {
  var userName = $('#userName').val();
  if(userName !== '') {
  var newPerson = new person(userName);
  People.push(newPerson);
  document.getElementById('result').innerHTML += "<h4>" + userName + "</h4>";
  console.log(newPerson.name);
  console.log(People);
  $('#userName').val("");
  // showEveryBody();
  } else {
    alert('Please enter a name.')
  }
}







// function editName() {
//   var name = $('#userName').val();
// }
