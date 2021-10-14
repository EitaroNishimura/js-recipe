/* eslint-disable no-unused-vars */
const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function() {
  const text = memoInput.value

  const display = document.createElement("div")
  display.className = "display"

  const content = document.createElement("div")
  content.className = "content"
  content.textContent = text

  display.append(content)
  memoContainer.append(display)

  const deleteButton = document.createElement("button")
  deleteButton.className = "delete"
  deleteButton.textContent = "削除"

  deleteButton.onclick = function() {
    display.remove()
  }
  display.append(deleteButton)
  memoContainer.append(display)

  memoInput.value = ""
}
