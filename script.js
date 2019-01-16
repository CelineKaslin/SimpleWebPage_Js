function memoryList() {
  let memory = document.getElementById('memoryInput').value
  let text = document.createTextNode(memory)
  let newMemory = document.createElement('li')
  newMemory.appendChild(text)
  document.getElementById('memoryList').appendChild(newMemory)
}
