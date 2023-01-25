import './App.css'

import TodoItem from './components/TodoItem/TodoItem';

function App() {

  return (
    <div className="App">
      <ul>
        <TodoItem task="Köp kaffe" done={ true } />
        <TodoItem task="Köp kaka"  done={ false } />
        <TodoItem task="Brygg kaffe" done={ false } />
        <TodoItem task="Drick kaffe" done={ false } />
      </ul>
    </div>
  )
}

export default App
