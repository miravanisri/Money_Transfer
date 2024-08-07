
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './componets/Signup';
import Dashboard from './componets/Dashboard';
import Send from './componets/Send';
import Signin from './componets/Signin';


function App() {

  
return(
<>
<BrowserRouter>
<Routes>
  {/* <Route path='/' element={<Signin/>}/> */}
  <Route path='/SignUp' element={<Signup/>} />
  <Route path='/Signin' element={<Signin/>} />
  <Route path='/Send' element={<Send/>} />
  <Route path='/Dashboard' element={<Dashboard/>} />




  




</Routes>




</BrowserRouter>





</>







)



  




 
}

export default App
