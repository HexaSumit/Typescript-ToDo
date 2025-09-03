import { useState, type Dispatch, type FormEvent, type SetStateAction } from "react"
import type { todoType } from "../types/TodoTypes"

type TodoinputProps = {
    setTodos:  Dispatch<SetStateAction<todoType[]>>
}
const Todoinput = ({ setTodos }: TodoinputProps) => {
    const [input, setInput] = useState<string>("")

    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!input.trim()) return // empty input check

        // naya todo create
        const newTodo = {
            id: Date.now(),
            task: input,
            completed: false
        }

        // **props se setTodos call karna**
        setTodos(prev => [...prev, newTodo])

        // input clear kar do
        setInput("")
    }
    return (
        <form className=" w-full flex items-center justify-center" onSubmit={handlesubmit}>
            <div className=" w-[50%] flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Enter a new task..."
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
                    Add
                </button>
            </div>
        </form>
    )
}

export default Todoinput