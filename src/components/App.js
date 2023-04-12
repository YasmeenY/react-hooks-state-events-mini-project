import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategories, setSelectedCategories] = useState("All")

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter(task => task.text !== deletedTaskText))
  }

  const showTasks = tasks.filter(
    task => selectedCategories === "All" || task.category === selectedCategories
  )

  function addNewTask(newTask){
    setTasks([...tasks, newTask])
  }

  const filteredFormCategories = CATEGORIES.filter((cat) => cat !== "All")
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategories={selectedCategories} 
        setSelectedCategories={setSelectedCategories}
      />
      <NewTaskForm addNewTask={addNewTask} filteredFormCategories={filteredFormCategories}/>
      <TaskList tasks={showTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
