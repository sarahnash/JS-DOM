/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var b = document.getElementById('add-button')

var myNodeList = document.getElementById('todo-list').childNodes
var onlyElements = []
var i
for (i = 0; i < myNodeList.length; i++) {
  if (myNodeList[i].nodeType === Node.ELEMENT_NODE) {
    onlyElements.push(myNodeList[i])
  }
}

b.addEventListener('click', function () {
  var node = document.createElement('li') // create <li> node
  var text = document.getElementById('description').value // put description input as text
  node.innerHTML = text // make the description input the next <li>
  node.classList.add('item') // add item class to <li>
  document.getElementById('todo-list').appendChild(node) // add to the list
  onlyElements.push(node) // add to the array of <li> items
})

var parent = document.getElementById('todo-list')

parent.addEventListener('click', function (evt) {
  console.log('you clicked this')
  console.log(evt.target)
  if (evt.target.style.textDecoration === 'none') {
    evt.target.style.textDecoration = 'line-through'
  } else {
    evt.target.style.textDecoration = 'none'
  }
})


// clickOnBody.addEventListener('click', function (evt) {
//   if (evt.target.class === 'item') {
//     if (evt.target.style.textDecoration === 'none') {
//       evt.target.style.textDecoration = 'strikethrough'
//     } 
//     else {
//       evt.target.style.textDecoration = 'none'
//     }
//   }
// })

// function clickOnBOx(evt){
// evt.stopPropagation() stops bubbling of events you apply it to
// evt.preventDefault() stops the browser from doing native events, lets you be in charge
// console.log('click event <target>
// console.dir(evt)  : show all the properties of the event (you can't use log)
