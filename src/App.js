
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Store from './components/Store';
import LogOut from './components/LogOut';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppointmentsList from './components/AppointmentsList';
import Footer from './components/Footer';
function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <NavBar/>
     <header>
      <h1>Jungle Intuition</h1>
     </header>
     <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
     <Routes>
     <Route path='/' element={<HomePage/>}>

     </Route>

      <Route 
      path='sign-up' element={<SignUp/>}>
      </Route>
      <Route  path='sign-in' element={<SignIn/>}>
      </Route>
      <Route 
      path='store' element={<Store/>}>
      </Route>
      <Route 
      path='log-out' element={<LogOut/>}>
      </Route>
      <Route 
      path='appointments-list' element={<AppointmentsList/>}>
      </Route>
     </Routes>
    
     <Footer></Footer>
    </div>
  );
}

export default App;
