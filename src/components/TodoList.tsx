import type { Dispatch, SetStateAction } from "react"
import type { todoType } from "../types/TodoTypes"

type TodoListProp = {
    todos: todoType[]
    setTodos: Dispatch<SetStateAction<todoType[]>>
}
const TodoList = ({ todos, setTodos }: TodoListProp) => {

    const handleDelete = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

        const toggleComplete = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    return (
        <div className="w-[50%] flex flex-col gap-2">
            {todos.length === 0 ? (
                <p className="text-gray-500 text-lg p-5">No todos yet!</p>
            ) : (
                todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="flex justify-between items-center bg-white shadow p-2 rounded"
                    >
                        <span className={todo.completed ? "line-through text-gray-500" : ""}>
                            {todo.task}
                        </span>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <span onClick={()=>toggleComplete(todo.id)}>{todo.completed ? "✅" : "⏳"}</span>

                            {/* Delete Button */}
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                                onClick={() => handleDelete(todo.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>

    )
}

export default TodoList