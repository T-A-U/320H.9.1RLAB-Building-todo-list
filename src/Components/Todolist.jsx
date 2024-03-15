import React from 'react'
function newListItem() {
    let input = document.getElementById("input").value
    let li = document.createElement("li") 
    li.addEventListener("click",(event)=> {
        let target= event.target 
        target.style.display="none"

    })
    let item = document.createTextNode(input)
    li.appendChild(item)

}

function Todolist() {
  return (
    <div><form action=""> <input type="checkbox" /><input type="text" id="input"  /> <button>Edit</button> <button>Delete </button></form> 
     <ul> 
        <li>Finish part 1 of make a todo list.</li>
        <li>Finish making todo list.</li>
        <li>Catch up on unfinished assignments.</li>
        <li>Get ready for/plan for final project.</li>
        <li>Create the final project.</li>
        <li>Go back to the beginning & continue learning</li>
     </ul>
     </div>
  )
}

export default Todolist