import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import Header from './component/Header';
import Banner from './component/Banner';
function App() {
 

  return (
    <>
   <Header></Header>
  <Banner></Banner>
    <ToastContainer />
    </>
  )
}

export default App
