// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var h = document.getElementById('section-header')
console.log(h)

h.addEventListener('click', function () {
  var s = document.getElementById('section')
  if (s.style.display === 'none') {
    s.style.display = 'block'
  } else {
    s.style.display = 'none'
  }
})
