import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';


// import { Button, Stack } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <BrowserRouter>
      <div style={{maxWidth: "30rem", margin:"4rem auto"}}>
      <GlobalProvider>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/add' element={<Add />} />
            <Route path='/edit/:id' element={<Edit />} />
        </Routes>
        </GlobalProvider>
      </div>
    </BrowserRouter>

  );
}

export default App;
