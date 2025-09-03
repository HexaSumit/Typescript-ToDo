import type { todoType } from "../types/TodoTypes"

type TodoListProp={
    todos:todoType[]
}
const TodoList = ({todos}:TodoListProp) => {
  return (
    <div className="w-[50%] flex flex-col gap-2">
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos yet!</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center bg-white shadow p-2 rounded"
          >
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.task}
            </span>
            <span>{todo.completed ? "✅" : "⏳"}</span>
          </div>
        ))
      )}
    </div>
  )
}

export default TodoList