import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

// fetch("http://localhost:5000/todos")
// .then(async function(res){
//   const json = await res.json();
//   setTodos(json.todos);
// })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
          title: "Go to Gym",
          description: "You need to go to Gym",
          completed: false
        }
      ]} >
      </Todos>
    </div>
  )
}

export default App
