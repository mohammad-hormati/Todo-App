import './App.css';

 
//import component
import Header from './component/Header'
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';



function App() {

  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
