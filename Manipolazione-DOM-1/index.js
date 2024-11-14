const addProduct = () => {
  const ul = document.querySelector('.lista');
  const input = document.querySelector(".text-input")
  const nome = input.value
  const li=document.createElement("li")
  const checkbox=document.createElement("input")
  const newButton = document.createElement("button")

  checkbox.setAttribute("type", "checkbox")
  newButton.innerText="Remove"

  li.innerText = nome

  ul.appendChild(li)
  li.appendChild(checkbox)
  li.appendChild(newButton)

  newButton.addEventListener("click", () => {
    ul.removeChild(li)
    input.value="";
})
};
