import AddTodoForm from './components/AddTodoForm.tsx'
import TodoList from './components/TodoList.tsx'
import TodoSummary from './components/TodoSummary.tsx'
import useTodos from './hooks/useTodos.ts'
function App() {
  const {todos,
      addTodo,
      setTodoCompleted,
      deleteTodo,
      deleteAllCompleted
  } = useTodos()
  return (
    <main className='py-10 h-screen space-y-5 overflow-y-auto'>
      <h1 className='font-bold text-4xl text-center'>TODOS LIST</h1>
      <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6 '>
        <AddTodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} onCompletedChange={setTodoCompleted}
        onDelete={deleteTodo}/>
      </div>
      <TodoSummary 
      todos={todos}
      deleteAllCompleted={deleteAllCompleted}/>
    </main>
  )
}

export default App
