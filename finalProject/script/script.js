// function quizMultipleChoice() {
//   var questions = [{
//     question: "Siapakah hero mage yang menggunakan kartu pada ML?",
//     choices: ['Karina', 'Fanny', 'Jhonson', 'Harley'],
//     correctAnswer: 3
//   }, {
//     question: "Spell apa yang digunakan saat ingin telport ke turret?",
//     choices: ['Retribution', 'Regent', 'Arrival', 'Stun'],
//     correctAnswer: 2
//   }, {
//     question: "Tipe hero apa yang bisa healing teman se-tim?",
//     choices: ['Mage', 'Support', 'Asassin', 'Tank'],
//     correctAnswer: 1
//   }];

//   return questions
// }
// var questionCounter = 0; // track question
// var choices = []; //containing choice

// function createRadios(index) {
//   var radioList = $('<ul>');
//   var item;
//   var input = '';
//   for (var i = 0; i < questions[index].choices.length; i++) {
//     item = $('<li>');
//     input = '<input type="radio" name="answer" value=' + i + ' />';
//     input += questions[index].choices[i];
//     item.append(input);
//     radioList.append(item);
//   }
//   return radioList;
// }

var input = document.getElementsByTagName('input')
var counter = 0
function addNewItem() {
  counter += 1
  console.log(counter)
}

function clearInput () {
  for (var i = 0; i < input.length; i++) {
    input[i].value = ''
  }
}

var dataTd = document.getElementsByTagName('table')
var input = document.getElementsByTagName('input')
function trialAdd() {
  var tr = document.createElement('tr')
  var td = document.createElement('td')
  var checkTd = []
  for (var i = 0; i < input.length; i++ ){
    var containTD = dataTd[1].tBodies[0].rows[1].children[i]
    containTD.innerText = input[i].value
    checkTd.push(input[i].value)
  }
  console.log(document.getElementsByTagName('table'))
}
var insideTableTag = document.getElementsByTagName('section')
function delList () {
  // insideTableTag.removeChild('tr');
  // document.getElementsByTagName('table').removeChild('td')
}


var btnAddList = document.getElementById('addList');
btnAddList.onclick = trialAdd

var btnClear = document.getElementById('clearInput')
btnClear.onclick = clearInput

var btnDelete = document.getElementById('deletedList');
btnDelete.onclick = delList(document.getElementsByTagName('tr'))

var dataTd = document.getElementsByTagName('table')
// console.log(document.getElementsByTagName('input')[3].value)
// console.log(document.getElementsByTagName('input')[0].value)
// console.log(addNewItem())
// if (counter > 1) {
//   btnAddList.onclick = othersData
// }
// var btnCount = document.getElementById('counterClick');
// btnCount.onclick = addNewItem



// dataTd
// console.log(dataTd[1].tBodies[0].rows[1])


// Terakhir, kita mengappend button tersebut ke dalam insdieMainDiv
// insideMainDiv.appendChild(button);
