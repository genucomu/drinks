import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import {List} from './Pages/List'
import {Cocktail} from './Pages/Cocktail'

const App = ()=> {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/cocktail:id" element={
            <Cocktail />
          } />
          <Route path="/" element={
            <List />
          }/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
