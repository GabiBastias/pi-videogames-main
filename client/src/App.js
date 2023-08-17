import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';


function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route
          path='/'
          element={<Landing />}
          />
        <Route
          path='/home'
          element={<Home/>}
          />
        <Route
          path='/detail'
          element={<Detail/>}
          />
        <Route
          path='/form'
          element={<Form/>}
          />
      </Routes>
    </div>
  );
}

export default App;
