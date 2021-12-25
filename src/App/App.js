import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from '../Context/AuthProvider';
import Home from '../Pages/Home/Home/Home';
import Explore from '../Pages/Explore/Explore';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';
import PrivateRoute from '../Routes/PrivateRoute/PrivateRoute';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import Purchase from '../Pages/Purchase/Purchase';
import NotFound from '../Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/explore">
              <Explore/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <PrivateRoute path="/dashboard">
                <Dashboard/>
            </PrivateRoute>
            <PrivateRoute path="/Purchase/:id">
                <Purchase/>
            </PrivateRoute>
            <Route path="*">
                <NotFound/>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
