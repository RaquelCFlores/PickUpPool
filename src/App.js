import React, {useState, useEffect } from 'react';
import {auth} from './firebase';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserOrders from './components/Orders/UserOrders';
import PickerOrders from './components/Orders/PickerOrders';
import Principal from './components/Principal/Principal';
import DetailOrder from './components/Orders/DetailOrder'
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
<<<<<<< HEAD
import PickerQualification from './components/Qualification/PickerQualification';
=======
import { PickerProfile } from './components/Profile/PickerProfile';
import { FormNewPicker } from './components/FormNewPicker/FormNewPicker';
>>>>>>> 80d2637 (pickerProfile / formNewPicker)

function App() {
  const [user, setUser] = useState(null) //No hubo nada establecido(ningún valoor)
  useEffect(() => { //Estado del servidor
    auth.onAuthStateChanged((user) => { //user del servidor
      if (user) {
        setUser(user) //Cuando existe el usuario setUser. Sincro
      } else {
        setUser(false) //Cuando no existe el usuario
      }
    })
  }, [])
  return (
    <>
    {user !== null ? (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/principal'>
            <Principal user={user}/>
          </Route>
          <Route path='/register'>
            <Register user={user}/>
          </Route>
          <Route path='/orders'>
            <UserOrders user={user}/>
          </Route>
<<<<<<< HEAD

          <Route path='/deliveries'>
            <PickerOrders user={user}/>
          </Route>

=======
          <Route path='/pickerProfile'>
            <PickerProfile user={user}/>
          </Route>
>>>>>>> 80d2637 (pickerProfile / formNewPicker)
          <Route exact path='/'>
            <Login user={user} />
          </Route>
          <Route path='/details'>
            <DetailOrder />
          </Route>
<<<<<<< HEAD
          <Route path='/qualify'>
            <PickerQualification/>
=======
          <Route path='/newPicker'>
            <FormNewPicker />
>>>>>>> 80d2637 (pickerProfile / formNewPicker)
          </Route>
        </Switch>
      </div>
    </Router>
    ): <p>Cargando...</p>}
    </>
  );
}
export default App;

