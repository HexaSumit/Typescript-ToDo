import './App.css'
import Todoinput from './components/Todoinput'

function App() {
  return (
    <>
      <div className=' min-h-screen bg-gray-500'>
        <div className=' flex items-center justify-center p-5 mb-4'>
          <h2 className=' text-2xl font-semibold underline'>Your Todo App</h2>
        </div>
        <Todoinput />
      </div>
    </>
  )
}

export default App
