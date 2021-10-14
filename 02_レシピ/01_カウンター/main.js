const display = document.getElementById("display")
const plusbutton = document.getElementById("plus-button")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")

let count = 0
plusbutton.onclick = function() {
  count += 1
  display.textContent = count
}
button1.onclick = function() {
  count -= 1
  display.textContent = count
}
button2.onclick = function() {
  count *= 2
  display.textContent = count
}
