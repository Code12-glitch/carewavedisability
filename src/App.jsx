import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/css/font-awesome.min.css'
import '../src/css/themify-icons.css'
import '../src/css/flaticon.css'
import './App.css';
import AllRoute from './main-component/router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div id="scrool">
      <AllRoute />
      <ToastContainer />
    </div>
  )
}

export default App
