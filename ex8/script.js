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
  onlyElements.push(node)
})

onlyElements.addEventListener('click', function () {
  var i
  for (i = 0; i < onlyElements.length; i++) {
    if (onlyElements[i].style.textDecoration === 'none') {
      onlyElements[i].style.Decoration = 'strikethrough'
    } else {
      onlyElements[i].style.Decoration = 'none'
    }
  }
})
