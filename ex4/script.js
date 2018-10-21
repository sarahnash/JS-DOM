// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById('myButton')

button.addEventListener('click', function () {
  var x = document.getElementsByClassName('box')
  console.log(x)
  var i
  for (i = 0; i < x.length; i++) {
    console.log(x[i])
    x[i].style.backgroundColor = 'blue'
  }
})
