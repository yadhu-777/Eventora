import Mainpage from './landingpage/Mainpage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Hero from './Eventpage/hero'
import Navtop from './landingpage/Navtop'
 import "./landingpage/Front.css"
 import Navbottom from './landingpage/Navbottom'
import Addevent from './landingpage/Addevent'
 import Event from './Eventpage/Event'
 import Signup from './landingpage/Signup'
import Baroptions from './Baroptions'

 import Yourevent from './Eventpage/Yourevent'
 import Login from './login/login'
import { ToastContainer} from "react-toastify";
import Updateevent from './Eventpage/Updateevent'
import Showpage from './Eventpage/Showpage'
import Notfound from './notfound/Notfound'
import Events from './Eventpage/Events'
import axios from 'axios'
import About from './Eventpage/About'
import { Barcontext } from './Barcontext'
import { useContext, useEffect } from 'react'
import Bookedevent from './Eventpage/Bookedevent'

function App() {
    const {issigned,setSigned} = useContext(Barcontext)
   useEffect(()=>{
  async function send(){
    const val = await  axios.get("http://localhost:3000/",{withCredentials:true})
if(Object.keys(val).length >0){
setSigned(false)
}

else{
  return null
}


  }

send()

  },[issigned])

  return (
<>

    <BrowserRouter>
<Navtop/>
<Baroptions/>
    <Routes>
      <Route path='/' element={ <Mainpage/>}/>
           <Route path='/own/:id' element={ <Events/>}/>
       <Route path='/home' element={ <Mainpage/>}/>
       <Route path='/event' element={ <Hero/>}/>
       <Route path='/card/:id' element={ <Event/>}/>
       <Route path='/addevent' element={ <Addevent/>}/>
         <Route path='/signup' element={ <Signup/>}/>
            <Route path='/ownevent' element={ <Yourevent/>}/>
               <Route path='/login' element={ <Login/>}/>
                <Route path='/about' element={ <Bookedevent/>}/>
                 <Route path='/update' element={ <Updateevent/>}/>
                    <Route path='/showpage' element={ <Showpage/>}/>
                        <Route path='*' element={ <Notfound/>}/>
                    
               
    </Routes>
   <Navbottom/>
</BrowserRouter>

<ToastContainer/>
   </>
  )
}

export default App
