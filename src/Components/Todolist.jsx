import React, {useState} from 'react'

// import Function from './Function'
// function newListItem() {
//     let input = document.getElementById("input").value
//     let li = document.createElement("li") 
//     li.addEventListener("click",(event)=> {
//         let target= event.target 
//         target.style.display="none"

//     })
//     let item = document.createTextNode(input)
//     li.appendChild(item)

// }

// newListItem()

  // Todo list items
  // const listItems = ['Finish part 1 of make a todo list.','Finish making todo list.', 'Catch up on unfinished assignments.','Get ready for/plan for final project.', 'Create the final project.', 'Go back to the beginning & continue learning']
  // let inputValue = document.getElementById("input").value
  // let add = document.getElementById("add")
  // //Do this onclick of the add button
  // add.addEventListener("click",(e)=> {
  //   listItems.appendChild(inputValue)
  
  // })
  // listItems.appendChild(inputValue)
  // console.log(listItems)
  
  // //Delete button should delete the respective item from the list (display none)
  // let deletebtn = document.getElementById("Delete")
  // deletebtn.addEventListener("click", (e) => {
  
  // })



// function Todolist() {
  // const [todo, setTodo] = useState(()=> addElement())
  // const [listItems, setListitems] = useState(['Finish part 1 of make a todo list.','Finish making todo list.', 'Catch up on unfinished assignments.','Get ready for/plan for final project.', 'Create the final project.', 'Go back to the beginning & continue learning'])

  // function addElement(){
  //   // const listItems = ['Finish part 1 of make a todo list.','Finish making todo list.', 'Catch up on unfinished assignments.','Get ready for/plan for final project.', 'Create the final project.', 'Go back to the beginning & continue learning']
  // let inputValue = document.getElementById("input").value
  // // let add = document.getElementById("add")
  // //Do this onclick of the add button
  //   // listItems.push(inputValue)
  //   setListitems
  //   console.log(listItems)

  // // listItems.push(inputValue)
  // }
  // const isElementLoaded = async selector => {
  //   while ( document.querySelector(selector) === null) {
  //     await new Promise( resolve =>  requestAnimationFrame(resolve) )
  //   }
  //   return document.querySelector(selector);
  // };

  // I'm checking for a specific class .file-item and then running code. You can also check for an id or an element.
  // isElementLoaded('#add').then((selector) => {
      // Run code here.
        // Todo list items
  
  // });

  
 
  // return (
  //   <div><form action=""> <input type="checkbox" /><input type="text" id="input"  /> <button onclick={addElement}id="add">Add</button><button>Edit</button> <button id="Delete">Delete </button></form> 
  //    <ul> 
  //       <li>Finish part 1 of make a todo list.</li>
  //       <li>Finish making todo list.</li>
  //       <li>Catch up on unfinished assignments.</li>
  //       <li>Get ready for/plan for final project.</li>
  //       <li>Create the final project.</li>
  //       <li>Go back to the beginning & continue learning</li>
  //    </ul>
  //    {/* <Function></Function> */}
  //    </div>
  // )


  
// }

// import { useState } from 'react';

//Code Adapted from React documentation 
let ids = 0;
let toDoListItems = [
  { id: 0, name: 'Hope I pass this class by a hair' },
  { id: 1, name: 'Finish last bits of missing/unfinished assignments AND capstone..'},
  { id: 2, name: 'Go back to HTML & relearn/refresh entire MERN stack from the beginning '},
];

let completedItemsList = []

export default function ToDo() {
  const [name, setName] = useState('');
  const [items, setItems] = useState(toDoListItems);
  const [completedItems, setCompletedItems] = useState(completedItemsList)

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setItems([
          ...items,
          { id: ids++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {items.map(
          item => (
          <li key={item.id}>
            <input type="checkbox" 
        onChange={e => {
          onToggle(
            artwork.id,
            e.target.checked
          );
        }}
      />
            {item.name}
          
          <button onClick={() => {

          }}>Edit</button>
          <button onClick={() => {
            setItems(
              //each delete will only take out that specific id
              items.filter(i =>
                i.id !== item.id
              )
            );
          }}>
            Delete
          </button>
          </li>
        ))}
      </ul>
      {/* <h2>Completed Items List</h2> */}
    </>
  );
}

// export default Todolist

//Mozilla MDN example
// function Todo(props) {
//   return (
//     <li className="todo stack-small">
//      <div className="c-cb">
//   <input id={props.id} type="checkbox" defaultChecked={props.completed} />
//   <label className="todo-label" htmlFor={props.id}>
//     {props.name}
//   </label>
// </div>
//       <div className="btn-group">
//         <button type="button" className="btn">
//           Edit <span className="visually-hidden">{props.name}</span>
//         </button>
//         <button type="button" className="btn btn__danger">
//           Delete <span className="visually-hidden">{props.name}</span>
//         </button>
//       </div>
//     </li>
//   );
// }

// export default Todo;