import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Nav from './components/Nav/Nav';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import About from './views/About/About';
import { allGenres } from './redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Error from './views/Error/Error';


function App() {
  const {pathname} = useLocation();
  const detailedGame = useSelector(state => state.detailedGame);
  const dispatch = useDispatch();
  const routesNav = ['/about', '/home', `/detail/${detailedGame.id}`, '/form'];
  
  useEffect(() => {
      dispatch(allGenres());
  },[dispatch, pathname]);
  
  return (
    <div className="App">
      {
        (routesNav.find((route) => route === pathname) === pathname) ? <Nav /> : null
      }
      <Routes>
        <Route
          path='/about'
          element={<About/>}
        />
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
          element={<Form />}
          />
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
    </div>
  );
}

export default App;