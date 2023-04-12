import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  function addingTask(e){
    e.preventDefault()
    onTaskFormSubmit({text, category})
    setText("")
    setCategory("Code")
  }

  function handelCategoryChange(e){
    setCategory(e.target.value)
  }
  function handleTextChange(e){
    setText(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={addingTask}>
      <label>
        Details
        <input type="text"
          value={text}
          onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select 
          value={category}
          onChange={handelCategoryChange}
        >{categories.map(category => (<option key={category} 
          value={category}>{category}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
