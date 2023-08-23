import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Nav from './components/Nav/Nav';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import axios from 'axios';
import { allGames, allGenres } from './redux/actions/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function App() {
  const {pathname} = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(allGenres());
      dispatch(allGames());
  },[dispatch])

  const createGame = async(game) => {
    const petition = '/videogames/create';
    try {
      await axios.post(petition, game)
      .then(res => console.log(res))
    } catch (error) {
        return { error: error.message };
    } 
  }
  
  return (
    <div className="App">
      {
        (pathname !== '/') ? <Nav /> : null
      }
      <Routes>
        <Route
          path='/'
          element={<Landing />}
          />
        <Route
          path='/home'
          element={<Home />}
          />
        <Route
          path='/detail/:id'
          element={<Detail />}
          />
        <Route
          path='/form'
          element={<Form create={createGame}/>}
          />
      </Routes>
    </div>
  );
}

export default App;
