/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var b = document.getElementById('add-button')

b.addEventListener('click', function () {
  var node = document.createElement('li') // create <li> node
  var text = document.getElementById('description').value // put description input as text
  node.innerHTML = text // make the description input the next <li>
  node.classList.add('item') // add item class to <li>
  document.getElementById('todo-list').appendChild(node) // add to the list
})

var myNodeList = document.getElementById('todo-list').childNodes
console.log(myNodeList)

myNodeList.addEventListener('click', function () {
  var i
  for (i = 0; i < myNodeList.length; i++) {
    if (myNodeList[i].style.textDecoration === 'none') {
      myNodeList[i].style.Decoration = 'strikethrough'
    } else {
      myNodeList[i].style.Decoration = 'none'
    }
  }
})


//   var list = document.getElementById('todo-list')
//   if (s.style.display === 'none') {
//     s.style.display = 'block'
//   } else {
//     s.style.display = 'none'
//   }
// })

// button.addEventListener('click', function () {
//     var x = document.getElementsByClassName('box')
//     console.log(x)
//     var i
//     for (i = 0; i < x.length; i++) {
//       console.log(x[i])
//       x[i].style.backgroundColor = 'blue'
//     }
//   })
  