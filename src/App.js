import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="container border border-primary rounded mt-5"
      style ={{
        background: `url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }} 
       >
         <Todo />
    </div>
  );
}

export default App;
