import Header from './components/Header.jsx'
import Home from './views/Home.jsx'
import { TodosProvider } from './TodosContext.jsx'
import './App.scss'

function App() {
  return (
    <>
      <main>
        <TodosProvider>
          <Header appName="To-Do List with React" />
          <Home />
        </TodosProvider>
      </main>
    </>
  )
}

export default App

// teste coments teste teste
