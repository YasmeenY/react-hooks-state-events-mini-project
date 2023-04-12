import React, {useState} from "react";

function NewTaskForm({filteredFormCategories, addNewTask}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  function addingTask(e){
    e.preventDefault()
    addNewTask({text, category})
    setText("")
    setCategory("Code")
  }

  function handelCategoryChange(e){
    setCategory(e.target.value)
  }
  function handleTextChange(e){
    setText(e.target.value)
  }

  const filterCategories = filteredFormCategories.map(task => <option key={task}>{task} </option> )
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
        >{filterCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
